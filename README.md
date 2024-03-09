# KIRA Network Documentation Repository

This repository holds KIRA's documentation. It leverages Nocusaurus to extract content from KIRA's Notion workspace using the Notion API and transform it into sructured Markdown files. These files are then processed with Docusaurus v3 to generate static HTML files deployed via gutHub page.

Deployment branch: [docs.kira.network](https://github.com/KiraCore/docs.kira.network/tree/docs.kira.network)

## How to Use

### Installation:

1. **Clone Repository**: Clone the repository to your local machine.
2. **Set Required Environment Variables**: Set `GIT_PASS` and `GIT_USER` for GitHub deployment, and `DOCU_NOTION_SAMPLE_ROOT_PAGE` and `DOCU_NOTION_INTEGRATION_TOKEN` for Notion integration.
   - For GitHub Deployment:
     ```bash
     export GIT_PASS=[***]
     export GIT_USER=[***]
     ```
   - For Notion Integration:
     ```bash
     export DOCU_NOTION_SAMPLE_ROOT_PAGE=[***]
     export DOCU_NOTION_INTEGRATION_TOKEN=[***]
     ```
   Follow the [Docusaurus deployment documentation](https://docusaurus.io/docs/deployment#environment-settings) and [Notion's integration setup guide](https://developers.notion.com/docs/create-a-notion-integration#give-your-integration-page-permissions) for more details.

### Documentation Update & Deployment:

Update content on Notion and fetch it: 

```bash
yarn install    # Install dependencies
yarn pull       # Fetch content from Notion (needs $DOCU_NOTION_SAMPLE_ROOT_PAGE and $DOCU_NOTION_INTEGRATION_TOKEN )
yarn build      # Build Docusaurus static site
```

Test and deploy with the following commands:

```bash
yarn serve      # Serve Docusaurus static site locally for testing before production deployment
yarn deploy     # Deploy to GitHub Pages (needs $GIT_PASS and $GIT_USER)
```