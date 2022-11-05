import React from 'react'
import './Assets.css'

function Assets(props) {
  var pull = true;
  function push(){
    if (pull === true) {
      document.getElementById(props.id).childNodes[1].style.display='block';
      document.getElementById(props.id).childNodes[2].firstChild.src='/image/navigate-up-arrow.png';
      pull= false;
    }
    else {
      document.getElementById(props.id).childNodes[1].style.display='none';
      document.getElementById(props.id).childNodes[2].firstChild.src='/image/down-arrow.png';
      pull = true;
    }
    }
  if (props.val.display_asset_reflection !== null) {
    return(
      <div id={props.id}>
      <div className='heading'>{props.val.asset_title}</div>
      <p id='desc' className='task'>{props.val.display_asset_reflection}</p>
      <button className='caret_btn' onClick={push}><img className='caret' src='/image/down-arrow.png' alt='angle up button'></img></button>
      </div>
    )
  }
  else if (props.val.asset_content === 'tb') {
    return(
      <div id={props.id}>
        <div className='heading'>{props.val.asset_title}</div>
        <form className='task'>
        <textarea className='txtArea' rows="5"  name="text" placeholder="Reflect as per given guidelines"></textarea>
        <br/>
        <input className='sbmt' type="submit" value="submit"/>
        </form>
        <button className='caret_btn' onClick={push}><img className='caret' src='/image/down-arrow.png' alt='angle up button'></img></button>    
      </div>
    )
  }
  else if (props.val.display_asset_docs !== "" || null) {
    return(
      <div id={props.id}>
        <div className='heading'>{props.val.asset_title}</div>
         <iframe className='task' id='doc' src={props.val.display_asset_docs} width="100%" height="500px"></iframe>
         <button className='caret_btn' onClick={push}><img className='caret' src='/image/down-arrow.png' alt='angle up button'></img></button>      
      </div>
    )
  }
  else if (props.val.display_asset_image !== '' || null) {
    return(
      <div id={props.id}>
        <div className='heading'>{props.val.asset_title}</div>
        <img className='task' src={props.val.display_asset_image} alt='Task'></img>
        <button className='caret_btn' onClick={push}><img className='caret' src='/image/down-arrow.png' alt='angle up button'></img></button>    
        </div>
    )
  }
  else if (props.val.display_asset_url !== '' || null) {
    return(
      <div id={props.id}>
      <div className='heading'>{props.val.asset_title}</div>
      <iframe className='task' id='audio' src={props.val.display_asset_url} height='100px'></iframe> 
      <button className='caret_btn' onClick={push}><img className='caret' src='/image/down-arrow.png' alt='angle up button'></img></button>      
      </div>
    )
  }
  else if (props.val.display_asset_video !== '' || null) {
    return(
      <div id={props.id}>
      <div className='heading'>{props.val.asset_title}</div>
      <iframe className='task' id='video' src={props.val.display_asset_video} height='300px' width='100%'></iframe> 
      <button className='caret_btn' onClick={push}><img className='caret' src='/image/down-arrow.png' alt='angle up button'></img></button>
      </div>
    )
  }
}

export default Assets