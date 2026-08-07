// 一回限りの最適化スクリプト。public配下の重いPNGをWebPに変換・リサイズする。
// 実行後は不要なので削除して構わない。
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const thumbsDir = path.join(publicDir, "works", "thumbs");

async function convert(srcRel, destRel, { width, quality }) {
  const src = path.join(publicDir, srcRel);
  const dest = path.join(publicDir, destRel);
  const before = (await sharp(src).metadata()).size ?? 0;
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
  const after = (await sharp(dest).metadata()).size ?? 0;
  console.log(`${srcRel} -> ${destRel}  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}

async function main() {
  await mkdir(thumbsDir, { recursive: true });

  // works/title1-10.png: マンガビューア本体(~700px表示)
  for (let i = 1; i <= 10; i++) {
    const name = `title${i}`;
    await convert(`works/${name}.png`, `works/${name}.webp`, { width: 900, quality: 78 });
    await convert(`works/${name}.png`, `works/thumbs/${name}.webp`, { width: 240, quality: 60 });
  }

  // works/book1-6.png: 書影グリッド + filmstrip
  for (let i = 1; i <= 6; i++) {
    const name = `book${i}`;
    await convert(`works/${name}.png`, `works/${name}.webp`, { width: 600, quality: 80 });
    await convert(`works/${name}.png`, `works/thumbs/${name}.webp`, { width: 240, quality: 60 });
  }

  // vision/*.png: ビジョングリッド + filmstrip
  for (const name of ["anime", "movie", "cm", "mv"]) {
    await convert(`vision/${name}.png`, `vision/${name}.webp`, { width: 800, quality: 80 });
    await convert(`vision/${name}.png`, `works/thumbs/${name}.webp`, { width: 240, quality: 60 });
  }

  // works/celebrity-secret.png
  await convert("works/celebrity-secret.png", "works/celebrity-secret.webp", { width: 900, quality: 80 });

  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
