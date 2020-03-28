import {useEffect, useContext} from 'react';
import {UserContext} from "../components/UserContext"
import axios from "axios"

export function useGet(url){
    const{users, setUsers, displayedUsers, setDisplayedUsers} = useContext(UserContext)
   
    // gets users from an api, stores them in both employees, and displayed users. Only occurs once when component is mounted.
    useEffect(()=> {
        async function getUsers(){
            try {
                const response = await axios.get(url)
                // using users to store a copy of all the users that will not be manipulated
                setUsers(response.data.results)
                // using displayed users to be a manipulated version of the users that will be displayed for sorting and filtering.
                setDisplayedUsers(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getUsers()
    },[])

    // used to decide which sort function to trigger
    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    // sorts the employees based on first name.
    function sortByName(){
         users.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        // You have to spread, because this creates a new variable, instead of just updating the variable. React will not recognize it as an update if you just update the variable.
        setDisplayedUsers([...users])
    }

    // sorts the employees based on age.
    function sortByAge(){
        users.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setDisplayedUsers([...users])
    }

    return {displayedUsers, sortFunc}
}
