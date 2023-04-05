import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
const markdown = `
# 💻 Tech Stack:

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Kotlin](https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white) ![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Apache Ant](https://img.shields.io/badge/Apache%20Ant-A81C7D?style=for-the-badge&logo=Apache%20Ant&logoColor=white) ![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white) ![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=dilipchandima&theme=dark&hide_border=false&include_all_commits=false&count_private=false)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=dilipchandima&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=dilipchandima&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)

### ✍️ Random Dev Quote
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

---
[![](https://visitcount.itsvg.in/api?id=dilipchandima&icon=0&color=0)](https://visitcount.itsvg.in)

 Proudly created with GPRM ( https://gprm.itsvg.in )
 
 ### 👋 &nbsp; Hi there I'm Dileepa Chandima (dilipchandima)

- 🔭  &nbsp; I’m currently working on NextJS and ReactNative Development
- 🌱  &nbsp; I’m currently learning NestJS, Node and Docker
- 👯  &nbsp; I’m looking to collaborate with great ideas
- 💬  &nbsp; Ask me about React Native and Firebase
- 📫  &nbsp; How to reach me: dilipchandima@gmail.com
---
### 🌐 &nbsp; You can find me around WWW 🌐

- web - https://www.dilipchandima.com/
- linkedIn - https://www.linkedin.com/in/dilipchandima/
- facebook - https://www.facebook.com/dilip.chandima/
---
### npm modules

- rn-select-date-range https://www.npmjs.com/package/rn-select-date-range

---
### my projects
- https://www.scrumtable.xyz/

---
### 🛠 &nbsp;Tech Stack

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![Java](https://img.shields.io/badge/-Java-05122A?style=flat&logo=Java&logoColor=FFA518)\
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)
![ReactNative](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-05122A?style=flat&logo=bootstrap&logoColor=563D7C)\
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)\
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC)
![IntelliJ IDEA](https://img.shields.io/badge/-RStudio-05122A?style=flat&logo=intellijidea)\
![Illustrator](https://img.shields.io/badge/-Illustrator-05122A?style=flat&logo=adobe-illustrator)
![Photoshop](https://img.shields.io/badge/-Photoshop-05122A?style=flat&logo=adobe-photoshop)
![InDesign](https://img.shields.io/badge/-InDesign-05122A?style=flat&logo=adobe-indesign)

----
### ⚙️ GitHub Analytics

![](https://github-readme-stats-eight-theta.vercel.app/api?username=dilipchandima&show_icons=true&theme=calm&include_all_commits=true&count_private=true)


<p>
<a href="https://github.com/dilipchandima">
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=dilipchandima&show_icons=true&theme=calm&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=dilipchandima&layout=compact&langs_count=8&theme=calm"/>
</a>
</p>
`;

export default function Home() {
  return (
    <main>
      <h1 className="text-9xl font-bold">github profile readme</h1>
      <div className="container mx-auto flex flex-row flex-wrap">
        <div className="flex-grow w-1/2">sd</div>
        <div className="flex-grow  w-1/2 prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
