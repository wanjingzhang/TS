import React, {ReactNode} from 'react'

interface Props{
    value:string;
    onClick:()=>void;
}

export default function Square({ value, onClick }: Props) {
    function handleClick() {
      console.log('Clicked!');
    }
  
    return <button className="square" >{value}</button>;
  }


 
// import systools from 'systools';

// console.log('ktools:', systools);
