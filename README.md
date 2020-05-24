# Static variant of Seran Wiki Outpost

Get source code

    git clone git@github.com:joshuabenuck/seran-static.git

Any simple web server will do. Here's an example with a docker hosted
caddy server:

    cd seran-static
    docker run -d --name seran-reader \
      --rm -p2015:2015 -v"$PWD:/it" -w /it \
      dobbs/proxy caddy browse

# Choose a different starting page

Edit index.html and change the `window.domain` to your preferred
starting point in the wiki federation.

# Choose to use our github hosted "CDN"

Edit index.html and un-comment the `<base>` tag.
