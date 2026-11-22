# Lab Portfolio

This folder is a static GitHub Pages site. Open `index.html` in a browser for a local preview.

## Personalize it

Edit `portfolio.js` to add your name, target role or focus, a short introduction, and your LinkedIn profile URL. Your GitHub profile link is already set. Leave optional fields empty to hide them.

## Add a lab

1. Put your write-up in a public GitHub repository or upload a PDF into this site's `labs` folder. You can also link to an existing public write-up.
2. Add an entry to the `labs` array in `portfolio.js`. Entries display in the order you list them, so place your strongest work first.
3. Open the site and check the entry and its links. When the site is live, commit updates to the publishing branch.

The entry below is an example. Replace the example details and paths with your own work. If you've uploaded a file into this repository, use a relative path such as `labs/network-segmentation.pdf`. For a Markdown write-up, use its full GitHub file URL so visitors see the rendered Markdown.

```js
{
  title: "Network segmentation lab",
  category: "Networking",
  date: "2026-11-22",
  summary: "Configured separate networks for staff and guest devices in a simulated environment.",
  outcome: "Verified permitted traffic and confirmed that guest devices could not reach the staff network.",
  tools: ["Packet Tracer", "VLANs", "Access control lists"],
  writeup: "labs/network-segmentation.pdf",
  evidence: "https://github.com/maridjanyusuf2-dev/YOUR-REPO",
},
```

Use a short, specific result and include your role if the lab was a group project. The date, links, and tools are optional. Test your public links in a signed-out browser before sharing the portfolio.

For a lab page with multiple screenshots, add a unique `id` to its entry in `portfolio.js` and add a matching record in `lab-evidence-data.js`. Each section has a heading and text. Each image has a filename, caption, width, and height. Use files you are comfortable making public and remove credentials and private details before uploading.

## Publish on GitHub Pages

1. Create a public GitHub repository named `maridjanyusuf2-dev.github.io`. If you already have a site at that address, use a new repository named `lab-portfolio` for a separate project site.
2. Commit the contents of this folder to the root of the `main` branch. Include the hidden `.nojekyll` file. If your repository already contains a `README.md`, review it before replacing it.
3. Open **Settings → Pages** in the repository. Choose **Deploy from a branch**, then **main** and **/(root)**, and select **Save**.
4. Open the URL shown in Pages settings after deployment. A user site uses `https://maridjanyusuf2-dev.github.io/`. A project site uses `https://maridjanyusuf2-dev.github.io/lab-portfolio/`.

[GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
