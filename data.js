var albumData= [
{
  name: "Album 1",
  photo1: "https://images.unsplash.com/photo-1443827423664-eac70d49dd0d?fit=crop&fm=jpg&h=750&q=80&w=1400",
  photo2: "https://images.unsplash.com/photo-1443827423664-eac70d49dd0d?fit=crop&fm=jpg&h=750&q=80&w=1400",
  photo3: "https://images.unsplash.com/photo-1443827423664-eac70d49dd0d?fit=crop&fm=jpg&h=750&q=80&w=1400",
  photo_by: "Todd Desantis"
},
{
  name: "Album 2",
  photo1: "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?q=80&fm=jpg&w=1080&fit=max&s=d2acdfa03af898137529c0e4248f43b8",
  photo_by: "Devin Rajaram"
},
{
  name: "Album 3",
  photo1: "https://images.unsplash.com/photo-1441155472722-d17942a2b76a?q=80&fm=jpg&w=1080&fit=max&s=80cb5dbcf01265bb81c5e8380e4f5cc1",
  photo_by: "Dylan Luder"
},
{
  name: "Album 4",
  photo1: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?fit=crop&fm=jpg&h=750&q=80&w=1400",
  photo_by: "Joshua Earle"
},
{
  name: "Album 5",
  photo1: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?fit=crop&fm=jpg&h=750&q=80&w=1400",
  photo_by: "Natish Meena"
},
{
  name: "Album 6",
  photo1: "https://images.unsplash.com/photo-1440558899941-2b58b4b0e6ad?fit=crop&fm=jpg&h=750&q=80&w=1400",
  photo_by: "Raining Huang"
},
];

// var pictureData = [
//   {
//     name: "Picture 1",
//     photo: "https://images.unsplash.com/photo-1443827357341-5def682bb98b?q=80&fm=jpg&w=1080&fit=max&s=e9653dd9f3c3d84e0ab7ec4641d0ddd7",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//   },
//   {
//     name: "Picture 2",
//     photo: "https://images.unsplash.com/photo-1443827187138-4e5e4e5ba78f?q=80&fm=jpg&w=1080&fit=max&s=40c1353f59de03324d093ffa2ee8ada3",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//   },
//   {
//     name: "Picture 3",
//     photo: "https://images.unsplash.com/photo-1428899530170-95753c69f40d?q=80&fm=jpg&w=1080&fit=max&s=a1e2431791c2ba6d7a7a2c7c649584eb",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//   },
// ];
// var albumData= [
//   {
//     name: "Album 1",
//     photo_by: "Todd Desantis",
//     photos: [
//       {
//       pic: "https://images.unsplash.com/photo-1443827423664-eac70d49dd0d?fit=crop&fm=jpg&h=750&q=80&w=1400"
//       },
//       {
//       pic: "https://images.unsplash.com/photo-1443827357341-5def682bb98b?q=80&fm=jpg&w=1080&fit=max&s=e9653dd9f3c3d84e0ab7ec4641d0ddd7"
//       },
//       {
//       pic: "https://images.unsplash.com/photo-1428899530170-95753c69f40d?q=80&fm=jpg&w=1080&fit=max&s=a1e2431791c2ba6d7a7a2c7c649584eb"
//       }
//     ]
//   },
//   {
//   name: "Album 2",
//   photo_by: "Devin Rajaram",
//   photos: [
//       {
//         pic: "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?q=80&fm=jpg&w=1080&fit=max&s=d2acdfa03af898137529c0e4248f43b8"
//       },
//       {
//         pic: "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?q=80&fm=jpg&w=1080&fit=max&s=d2acdfa03af898137529c0e4248f43b8"
//       },
//       {
//         pic: "https://images.unsplash.com/photo-1438907046657-4ae137eb8c5e?q=80&fm=jpg&w=1080&fit=max&s=d2acdfa03af898137529c0e4248f43b8"
//       }
//     ]
//   },
//     {
//     name: "Album 3",
//     photo_by: "Dylan Luder",
//     photos: [
//         {
//           pic: "https://images.unsplash.com/photo-1441155472722-d17942a2b76a?q=80&fm=jpg&w=1080&fit=max&s=80cb5dbcf01265bb81c5e8380e4f5cc1"
//         },
//         {
//           pic: "https://images.unsplash.com/photo-1441155472722-d17942a2b76a?q=80&fm=jpg&w=1080&fit=max&s=80cb5dbcf01265bb81c5e8380e4f5cc1"
//         },
//         {
//           pic: "https://images.unsplash.com/photo-1441155472722-d17942a2b76a?q=80&fm=jpg&w=1080&fit=max&s=80cb5dbcf01265bb81c5e8380e4f5cc1"
//         }
//       ]
//     },
//     {
//     name: "Album 4",
//     photo_by: "Joshua Earle",
//     photos: [
//         {
//           pic: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?fit=crop&fm=jpg&h=750&q=80&w=1400"
//         },
//         {
//           pic: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?fit=crop&fm=jpg&h=750&q=80&w=1400"
//         },
//         {
//           pic: "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?fit=crop&fm=jpg&h=750&q=80&w=1400"
//         }
//       ]
//     },
//     {
//       name: "Album 5",
//       photo_by: "Natish Meena",
//       photos: [
//           {
//             pic: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?fit=crop&fm=jpg&h=750&q=80&w=1400"
//           },
//           {
//           pic: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?fit=crop&fm=jpg&h=750&q=80&w=1400"
//           },
//           {
//             pic: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?fit=crop&fm=jpg&h=750&q=80&w=1400"
//           }
//         ]
//       },
//       {
//         name: "Album 6",
//         photo_by: "Raining Huang",
//         photos: [
//           {
//             pic: "https://images.unsplash.com/photo-1440558899941-2b58b4b0e6ad?fit=crop&fm=jpg&h=750&q=80&w=1400"
//           },
//           {
//             pic: "https://images.unsplash.com/photo-1440558899941-2b58b4b0e6ad?fit=crop&fm=jpg&h=750&q=80&w=1400"
//           },
//           {
//             pic: "https://images.unsplash.com/photo-1440558899941-2b58b4b0e6ad?fit=crop&fm=jpg&h=750&q=80&w=1400"
//           }
//         ]
//       }
// ];
