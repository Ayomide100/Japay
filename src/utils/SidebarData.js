import React from "react";
import  {Link} from 'react-router-dom'
import * as icon from 'react-icons/fa'
import * as aiicon from 'react-icons/ai';
import * as ioicon from 'react-icons/io';

export default SidebarData =[
    {
        title: "Dashboard",
        path: "/",
        icon:  <aiicon.AiFillHome/>,
    },
    {
        title: "JobPosted",
        path: "/",
        icon:  <ioicon.IoIosPaper/>,
    },
    {
        title: "Support",
        path: "/",
        icon:  <ioicon.IoMdHelp/>,
    }
]