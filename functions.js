function loadArticles()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            var result = this.responseText;

            var results = JSON.parse(result);
            results.forEach((new_table) => {
                var node = document.createElement("div");
                var themes = document.createElement("h4");
                var prog_lang = document.createElement("h5");
                var difficulty_lang = document.createElement("h6");
                var article = document.createElement("p");

                var themeText = document.createTextNode("theme:" + new_table.theme);
                var langText = document.createTextNode("lang:" + new_table.lang);
                var difficultyText = document.createTextNode("difficulty:" + new_table.difficulty);
                var articleText = document.createTextNode("article:" + new_table.text);


                themes.appendChild(themeText);
                prog_lang.appendChild(langText);
                difficulty_lang.appendChild(difficultyText);
                article.appendChild(articleText);

                document.getElementById('new_table').appendChild(node);

            });
        }
    }

    xhttp.open('GET','/home',true);
    xhttp.send();
}