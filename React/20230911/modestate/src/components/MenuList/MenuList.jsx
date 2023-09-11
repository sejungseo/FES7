import React from 'react';
import "./MenuList.css";
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList(props) {

  const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];

  return (
    <ul className='container-list'>
      {/* 중괄호로 감싸지 않으면 JS가 되므로 중괄호쓰기 */}
      {menus.map((moodEl, index)=>{
        return <MenuListItem key={index} mood = {moodEl} setCurrentMood={props.setCurrentMood} /> //setCurrentMood 하위로 내려줌
      })}
    </ul>
  )
}
