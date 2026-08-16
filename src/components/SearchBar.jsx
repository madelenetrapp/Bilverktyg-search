import { collection } from "firebase/firestore"
import { getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"
import db from "../firebase.js"

function searchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const [parts, setParts] = useState([]);


  useEffect(() => {

    async function fetchParts() {

      const result = await getDocs(collection(db, "tools"))
      result.docs.map((doc) => doc.data())
    }

    fetchParts()

  }, []);

  return (
    <input onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm} className="searchField"></input>
  )
}

export default searchBar

// useState, onChange, jämför med name abbrivation, filtrera resultat, visa toolCard för varje träff


//  collection (db, "tools")