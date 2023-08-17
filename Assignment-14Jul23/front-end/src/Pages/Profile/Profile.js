import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { decodeToken} from 'react-jwt';

export default function Profile() {
    const [enable, setEnable] = useState(false);
    const [updateData, setUpdateData] = useState({});
    const token = localStorage.getItem("token");
    const data=decodeToken(token);

    function editUserProfile() {
        setEnable(true);
    }
    function handleUpdateChange(e) {
        setUpdateData((previousValue) => (
            { ...previousValue, [e.target.name]: e.target.value }
        ))
    }
    async function saveUpdatedData() {
        console.log(updateData);
        try{ 
            const result=await axios.post("http://localhost:8080/editprofile", {
                token:token,
                updateData,
            })
            if(result.status===200){
                console.log(result.data);
            }
        }
        catch(e){
            console.log(e);
            if(e.response.status===500){
                alert(e.response.data.msg);
            }
        }
    }

    useEffect(() => {
        setUpdateData(decodeToken(token));
        console.log(data);
    }, [])


    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <label>Username</label>
                <input type='text' name="username"
                    disabled={enable ? false : true}
                    onChange={handleUpdateChange}
                    value={updateData.username}></input>
            </div>
            <div>
                <label>Phone</label>
                <input type='text' name="phone" 
                disabled={enable ? false : true} 
                onChange={handleUpdateChange}
                value={updateData.phone}></input>
            </div>
            <div>
                <label>City</label>
                <input type='text' name="city" 
                disabled={enable ? false : true} 
                onChange={handleUpdateChange}
                value={updateData.city} placeholder=''></input>
            </div>
            <div>
                <label>Role</label>
                <input type='text' name="role" 
                disabled={enable ? false : true} 
                onChange={handleUpdateChange}
                value={updateData.role}></input>
            </div>
            <div>
                <label>Organization</label>
                <input type='text' name="organization" 
                disabled={enable ? false : true} 
                onChange={handleUpdateChange}
                value={updateData.organization}></input>
            </div>
            <button onClick={editUserProfile}>Edit</button>
            <button onClick={saveUpdatedData}>Save</button>
        </div>
    )
}
