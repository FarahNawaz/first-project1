import Link from "next/link"

Link
export default function Products(){
    return(
       <div>
<ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
  </ul>
    <h1>Products List</h1>
 </div>   )
}