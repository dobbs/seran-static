# Static variant of Seran Wiki Outpost

Get source code

    git clone git@github.com:joshuabenuck/seran-static.git

Any simple web server will do. First using `file_server.ts` from the
deno standard library:

    cd seran-static
    deno run --allow-net --allow-read https://deno.land/std/http/file_server.ts

Second our local, slightly modified copy:

    ./assets/deno/file_server.ts

Visit either of the above:

    http://localhost:4507

# Choose a different starting page

Edit index.html and change the `window.domain` to your preferred
starting point in the wiki federation.

# Choose to use our github hosted "CDN"

Edit index.html and un-comment the `<base>` tag.
