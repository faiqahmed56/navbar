export function navbar(){
  var nav = document.createElement("nav")
    nav.innerHTML=`
    <ul>
        <li>home</li>
        <li>about</li>
        <li>contact us</li>
    </ul>
`
document.body.prepend(nav)
}
