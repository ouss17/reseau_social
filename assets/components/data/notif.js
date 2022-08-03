import { ArrowDown, ArrowUp, Comment, Heart, UserPlus } from "../Svg/Svgs";
import React from "react";

export const dataNotifs = [
    {
        icon: <UserPlus />,
        avatarUser: "",
        title: "Pseudo s'est abonné à vous !",
    },
    {
        icon: <><Heart /> <ArrowUp /></> ,
        avatarUser: "",
        title: <><strong>Pseudo</strong> à aimé votre post !</>,
        content: {
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, nulla convallis semper luctus, odio ex suscipit sem, ac pulvinar augue urna vulputate magna. Nulla mollis velit ut mauris molestie, sodales vestibulum nulla egestas.Aenean et lorem et libero ornare porttitor.
            Cras vel mi pellentesque, venenatis turpis quis, condimentum nibh.Aliquam sollicitudin mauris sed nisl ullamcorper, in commodo mi eleifend.In posuere tortor ut dolor consectetur, ut sodales leo dignissim.Etiam e.`,
            file1: "",
            file2: "",
            file3: "",
            file4: "",
        }
    },
    {
        icon: <><Heart /> <ArrowDown /></>,
        avatarUser: "",
        title: "Pseudo n'a pas aimé votre post !",
        content: {
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, nulla convallis semper luctus, odio ex suscipit sem, ac pulvinar augue urna vulputate magna. Nulla mollis velit ut mauris molestie, sodales vestibulum nulla egestas.Aenean et lorem et libero ornare porttitor.
            Cras vel mi pellentesque, venenatis turpis quis, condimentum nibh.Aliquam sollicitudin mauris sed nisl ullamcorper, in commodo mi eleifend.In posuere tortor ut dolor consectetur, ut sodales leo dignissim.Etiam e.`,
            file1: "",
            file2: "",
            file3: null,
            file4: null,
        }
    },
    {
        icon: <Comment />,
        avatarUser: "",
        title: "Pseudo vous a répondu !",
        content: {
            content: ``,
            file1: null,
            file2: null,
            file3: null,
            file4: null,
        }
    },
]