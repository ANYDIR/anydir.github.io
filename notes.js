const settings = {
    ids: {
        // Element with the article body
        article: "article",
        // Argument for identifying the article
        argument: "a",
        // Article path
        articlepath: "./md/",
        // Path to github repo base
        githubpath: "https://github.com/anydir/anydir.github.io/edit/master/md/",
        // Path to create a new page
        createpath: "https://github.com/anydir/anydir.github.io/new/master/md/",
        // Page if page argument not found
        notfound: "index"
    },
    // List of things to query in the body for the sidebar
    notablesQuery: "h2, h3, h4, h5, h6",
    // Character used to split crumbs
    crumb: " ❯",
    // Index for folders in the argument
    index: "index",
    // Page title components
    pagetitleprefix: "",
    pagetitlesuffix: " - ANYDIR Wiki"
}

function makeRequest(method, url) {
    console.log("Requesting " + url)
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            console.log("Retrieved " + url)
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function loadFile(name){

    var converter = new showdown.Converter({tables: true, strikethrough: true, ghCodeBlocks: true, tasklists: true, metadata: true, simplifiedAutoLink: true}),
        htmlText      = converter.makeHtml(await makeRequest("GET", name));

    document.getElementById(settings.ids.article).innerHTML = htmlText

}

const url = new URL(window.location.href)
let args = url.searchParams

function getDirectories(path, index) {
    let result = ""
    path.split("/").slice(0, index+1).forEach(function(chunk, i){
        result = result + chunk + (i == index ? "" : "/")
    })
    //console.log("Path is " + result)
    return result
}

// Set the github link to the page
document.getElementById("githubLink").href = settings.ids.createpath + (args.get(settings.ids.argument) == null ? settings.ids.notfound : args.get(settings.ids.argument)) + ".md"

loadFile(settings.ids.articlepath + (args.get(settings.ids.argument) == null ? settings.ids.notfound : args.get(settings.ids.argument)) + ".md").then(function(){

    // Time to clean some stuff up and get moving!
    document.getElementById("githubLink").textContent = "Edit This Page On Github"
    document.getElementById("githubLink").href = settings.ids.githubpath + (args.get(settings.ids.argument) == null ? settings.ids.notfound : args.get(settings.ids.argument)) + ".md"    

    // Generate sidebar links
    let createSidebarLink = function(name, inlink, linkclass){
        let link = document.createElement("a")
        link.href = inlink
        link.classList.add("section-link", linkclass)
        link.textContent = name
        document.getElementById("sidebar").appendChild(link)
    }

    document.querySelectorAll(settings.notablesQuery).forEach(function(item){
        createSidebarLink(item.textContent, "#" + item.id, "type" + item.nodeName.toLowerCase())
    })

    // Generate breadcrumbs
    let breadcrumbs = document.getElementById("breadcrumbs")
    
    let crumbs = args.get(settings.ids.argument) ? args.get(settings.ids.argument).split("/") : ["index"]

    //Add root
    let link = document.createElement("a");
    link.textContent = "Root" + settings.crumb
    link.classList.add("breadcrumb")
    link.href = url.origin + url.pathname + "?a=" + settings.index
    breadcrumbs.appendChild(link)

    // Loop crumbs
    crumbs.forEach(function(crumb, index) {
        //console.log(crumb)
        let link = document.createElement("a");
        link.textContent = crumb + (index == crumbs.length - 1 ? "" : settings.crumb)
        //console.log(index)
        link.classList.add("breadcrumb")
        link.href = url.origin + url.pathname + "?a=" + getDirectories(args.get(settings.ids.argument), index) + (index == crumbs.length - 1 ? "" : "/" + settings.index)
        breadcrumbs.appendChild(link)
    })

    // Generate page title
    let title = settings.pagetitleprefix + (document.querySelectorAll("h1")[0] == null ? "Unnamed page" : document.querySelectorAll("h1")[0].textContent) + settings.pagetitlesuffix

    if (document.head.querySelectorAll("title")[0]){
        document.head.querySelectorAll("title")[0].textContent = title
    }else{
        let titleNode = document.createElement("title")
        titleNode.textContent = title
        document.head.appendChild(titleNode)
    }


})

let resizeFunction = function(){
    if (document.getElementById("main-container").clientWidth == 1000){
        document.getElementById("sidebar").classList.remove("hidden")
    } else {
        document.getElementById("sidebar").classList.add("hidden")
    }
}

let resize = new ResizeObserver(resizeFunction)

resize.observe(document.getElementById("main-container"))

resizeFunction()