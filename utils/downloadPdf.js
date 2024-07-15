const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch(); // launch a browser (chromium by default but you can chose another one)
  const page = await browser.newPage(); // open a page in the browser
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
  }); // visit the printable version of your page
  await page.pdf({ format: "a4", path: "./AliAkbarBeigi-resume.pdf" }); // generate the PDF 🎉
  await browser.close(); // don't forget to close the browser. Otherwise, it may cause performances issues or the server may even crash..
})();
