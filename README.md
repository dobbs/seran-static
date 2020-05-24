# Static variant of Seran Wiki Outpost

Get source code & install deno*

    git clone git@github.com:joshuabenuck/seran-static.git
    curl -fsSL https://deno.land/x/install/install.sh | sh

*Any simple web server will do. We suggest the deno incantation
below because we are using deno for other experiments.

    cd seran-static
    deno run \
      --allow-net \
      --allow-read=$PWD \
      https://deno.land/std/http/file_server.ts

# Choose a different starting page

Edit index.html and change the `window.domain` to your preferred
starting point in the wiki federation.

# Choose to use our github hosted "CDN"

Edit index.html and un-comment the `<base>` tag.
