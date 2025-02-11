import { peopledata } from "../Data/peopleData"

const Table=()=>{
  return(
    <>
    <table border={1} cellSpacing={0}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>occuption</th>
                <th>address</th>
                <th>phone</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            {
                peopledata.map((person,index)=>(
                    <>
                    <tr>
                        <td>{person.id ??  "N/A"}</td>
                        <td>{person.name ?? "N/A"}</td>
                        <td>{person.age ??"N/A"}</td>
                        <td>{person.occupation ?? "N/A"}</td>
                        <td>{person.address?? "N/A"}</td>
                        <td>{person.phone ??"N/A"} </td>
                        <td>{person.email ??"N/A"}</td>
                        
                    </tr>
                    </>

                ))
            }
        </tbody>

    </table>
    </>
  )
}
export default Table