# Review Notes

1. CRA is a bit outdated and provides a lot of overhead, i personally would choose [vite](https://vitejs.dev/guide/) for small projects a simple cli call initializes a nice prompt to setup a project, furthermore pnpm is the package manager of choice and what we use internally it offers multiple performance benefits

`pnpm create vite`

2. We exclusevily use TypeScript, an additonal layer on top of JavaScript to have a type safe develpoment expierence.

3. I see an empty .env file, NEVER ever commit api keys, secrets and so on to git.

4. I only see one commit, commits should be done regularly. Git is a version control system and if there is only 'ONE' version, you can not revert or take advantage of all the possibilities git offers.
