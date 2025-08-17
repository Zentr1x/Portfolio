import React, { useRef, useEffect, useState } from "react";


import "../css/Game.css"

export default function Game() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null)

  const board_width = 21
  const board_height = 21
  const block_size = 30

  var player_pos_x = useRef(11)
  var player_pos_y = useRef(11)

  var object_pos_x = useRef(18)
  var object_pos_y = useRef(11)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    // set up canvas size
    canvas.width = board_width * block_size;
    canvas.height = board_height * block_size;

    drawBoard();

    // listen for keypresses
    window.addEventListener("keydown", handleKeyDown);

    drawPlayer()
  }, []);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "w":
        if (player_pos_y.current > 0) {
          player_pos_y.current -= 1;
        }
        break;
      case "s":
        if (player_pos_y.current < board_height - 1) {
          player_pos_y.current += 1;
        }
        break;
      case "a":
        if (player_pos_x.current > 0) {
          player_pos_x.current -= 1;
        }
        break;
      case "d":
        if (player_pos_x.current < board_width - 1) {
          player_pos_x.current += 1;
        }
        break;
      default:
        return;
    }
    drawBoard()
    drawPlayer()
  }

  const drawBoard = () => {
    if (!ctxRef.current) {
      console.log('return')
      return
    }

    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    
     // set board colour
     ctx.fillStyle = "white";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const drawPlayer = () => {
    if (!ctxRef.current) {
      console.log('return')
      return
    }
    const ctx = ctxRef.current;

    if (player_pos_x.current <= 11 && player_pos_y.current <= 11) {
      // move character freely
      ctx.fillStyle = "red";
      ctx.fillRect(player_pos_x.current * block_size, player_pos_y.current * block_size, block_size, block_size);

      ctx.fillStyle = "blue";
      ctx.fillRect(object_pos_x.current * block_size, object_pos_y.current * block_size, block_size, block_size);

    } else if (player_pos_x.current <= 11) {

      // move character freely
      ctx.fillStyle = "red";
      ctx.fillRect(player_pos_x.current * block_size, 11 * block_size, block_size, block_size);

      ctx.fillStyle = "blue";
      ctx.fillRect(object_pos_x.current * block_size, (11 - (player_pos_y.current - object_pos_y.current) ) * block_size, block_size, block_size);

    } else  if (player_pos_y.current <= 11) {
      
      // move character freely
      ctx.fillStyle = "red";
      ctx.fillRect(11 * block_size, player_pos_y.current * block_size, block_size, block_size);

      ctx.fillStyle = "blue";
      ctx.fillRect((11 - (player_pos_x.current - object_pos_x.current)) * block_size, object_pos_y.current * block_size, block_size, block_size);
    } else{
      // keep character centered
      ctx.fillStyle = "red";
      ctx.fillRect(11 * block_size, 11 * block_size, block_size, block_size);

      // if object can be seen
      // calculated based on users view distance
      if ((player_pos_x.current - object_pos_x.current <= 20) && (player_pos_y.current - object_pos_y.current <= 20) ) {
        ctx.fillStyle = "blue";
        ctx.fillRect((11 - (player_pos_x.current - object_pos_x.current)) * block_size, (11 - (player_pos_y.current - object_pos_y.current) ) * block_size, block_size, block_size);
      }
    }

  };

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((e.clientX - rect.left) / 10) * 10,
      y: Math.floor((e.clientY - rect.top) / 10) * 10,
    };
  };



  return (
    <div>
      <h1 className="title">Game Page(scrapped) - implement three js animations instead</h1>
      <div className='board'>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
