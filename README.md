# Vue learning

Learning about **VueJS**, vue-router, Vuex, **SPA's** (Single-Page-web-App) **Webpack**, JavaScript ES2015 / Babel and the [vue-webpack](This `/docs` directory is saved in Git and pushed to the Github `master` **branch**.) boilerplate.

*By Dennis Burger, march 2018*

## Prerequisites

* [NodeJS](https://nodejs.org/en/) installed
* `vue-cli` installed, by running:

```bash
npm i -g vue-cli
```

## One time setup

Open a **command-line** or **Terminal** and `cd` into the directory where this project `package.json` -file resides. And install the required NPM packages running the regular command:

``` bash
npm install
```

## Running a local development server

Start a hot reloading local development server using:

```bash
npm run dev
```

Open a web browser with the following address and sub-directory:

	http://localhost:8080

This project is running deliberately inside above subdirectory (handled by Vue-router). Because the production version is running on a Github Project Page; which is a sub-directory (`/docs`) of its repository.

## Production ready build

Running the **build command** below will generate a production ready build inside the `/docs` directory with all its assets and dependencies.

```bash
npm run build
```

### For Github Pages

This `/docs` directory is saved, allong with the normal source code, in Git and pushed to the Github `master` **branch**. On the **Github respository settings** -page, for this repository, the **Github Pages** -feature is enabled and the option is set to serve static Github Pages content from this `/docs` directory. 

When done developing run a `npm run build` command, commit it to Git **master** -branch, and push the `master` -branch to the Github repository. See the Github project description for the Github Pages URL to see a production ready version of this dmeo project.

If you want to run it using Apache or IIS you'll need to have URL rewriting enabled (`mod_rewrite` for Apache) to have the web server always serve the `index.html` page for this SPA demo project.

### For Apache

Create a `.htaccess` config file inside the `/docs` directory. And have the web server serve this as (named) virtual-host.

```bash
<ifModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.html$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.html [L]
</ifModule>
```

### For Microsoft IIS server

Create a `web.config` config file inside the `/docs` directory. And have the web server serve this as (named) virtual-host.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
            <match url="(.*)" />
            <conditions logicalGrouping="MatchAll">
              <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
              <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```
