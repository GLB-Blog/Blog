import React from "react";
const items = [
    {
      id: 1,
      img: 'https://picsum.photos/400/300',
      title: 'No Poverty',
      description: 'Bu öğenin açıklaması'
    },
    {
      id: 2,
      img: 'https://picsum.photos/400/300',
      title: 'Zero Hunger',
      description: 'Bu öğenin açıklaması'
    },
    {
      id: 3,
      img: 'https://picsum.photos/400/300',
      title: 'Good Health and Well-Being',
      description: 'Bu öğenin açıklaması'
    },
    {
        id: 4,
        img: 'https://picsum.photos/400/300',
        title: 'Quality Education',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 5,
        img: 'https://picsum.photos/400/300',
        title: 'Gender Equality',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 6,
        img: 'https://picsum.photos/400/300',
        title: 'Clean Water and Sanitation',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 7,
        img: 'https://picsum.photos/400/300',
        title: 'Affordable and Clean Energy',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 8,
        img: 'https://picsum.photos/400/300',
        title: 'Decent Work and Economic Growth',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 9,
        img: 'https://picsum.photos/400/300',
        title: 'Industry, Innovation and Infrastructure',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 10,
        img: 'https://picsum.photos/400/300',
        title: 'Reduced Inequalities',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 11,
        img: 'https://picsum.photos/400/300',
        title: 'Sustainable Cities and Communities',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 12,
        img: 'https://picsum.photos/400/300',
        title: 'Responsible Consumption and Production',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 13,
        img: 'https://picsum.photos/400/300',
        title: 'Climate Action',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 14,
        img: 'https://picsum.photos/400/300',
        title: 'Life Below Water',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 15,
        img: 'https://picsum.photos/400/300',
        title: 'Life On Land',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 16,
        img: 'https://picsum.photos/400/300',
        title: 'Peace,Justice and Strong Institutions',
        description: 'Bu öğenin açıklaması'
      },
      {
        id: 17,
        img: 'https://picsum.photos/400/300',
        title: 'Partnerships for the Goals',
        description: 'Bu öğenin açıklaması'
      }
  ];

  const List = () => {
    return (
      <div className="list-container">
        {items.map((item) => (
          <div className="list-item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="item-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    );
  };


export default List