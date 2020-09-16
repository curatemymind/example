import React from 'react';
import './App.css'
import Vimeo from '@u-wave/react-vimeo';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slides.scss'; 

const itemsArr = [];


class App extends React.Component { 
  
  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      resources: null,
      dataFields: null,
      categories: [],
      data: null,
      
    };
  }

  componentDidMount()
  {
    let self = this;
    var tempRows = [];
    var tempResources = 0;
    var tempDataFields = 0;
    var tempCategories = [];
    var tempData = [];
    var path = null;

    fetch('https://spreadsheets.google.com/feeds/cells/1ncWZJvETrF-Y66BT6vpTupUdROtbyAxfqHEDNIiMG48/1/public/full?alt=json').then(res => 
    res.json()).then(data => {
      {
        
        tempDataFields = data['feed']['gs$colCount']['$t'];
        tempResources = data['feed']['gs$rowCount']['$t'] - 1;
        path = data['feed']['entry']
        
        
        for(var i = tempDataFields; i < path.length; i++)
        {
          tempData.push(path[i]['gs$cell']['inputValue'])
        }

      }
      self.setState({resources: tempResources, dataFields: tempDataFields, categories: tempCategories, data: tempData})
      

      
    })
    
  }

 

  render()
  {  
    var settings = {
    
      dots: false,
      infinite: false,
      speed: 500,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides", 
     
    };

    if(this.state.data != null)
    {
      for(var i = 0; i < this.state.data.length; i+=9)
      {
        const item = [];
        for(var j = 0; j < this.state.dataFields; j++)
        {
          if(j === 7)
          {
            var splitString = (String((this.state.data[i + j])).split(', '))
            var splitArr = [];
           
            for(var k = 0; k < splitString.length; k++)
            {
              splitArr.push(splitString[k]);
            }
            item.push(splitArr)
          }
          else
          {
            item.push(this.state.data[i + j])
          }
          

        }
        itemsArr.push(item)
      }
    }
    
    return (
      <div >
        <div style={{marginLeft: 20, width: 550}}>  

          <br></br>
          {itemsArr.map((itemData, index) => <div>
            <h1>{itemData[1]}</h1>
            <img src={itemData[2]} style={{width: 200}}></img>
            <h2>{itemData[3]}</h2>
            <h3>by {itemData[4]}</h3>
            <p>{itemData[5]}</p>
            <a href={itemData[6]}>Download Work File</a>
            {/*itemdata[7].map((videoLink, index2) => {
              
            })*/}
            <h3>Videos:</h3>
            <Slider {...settings}>
              {(itemsArr[index][7]).map((videoLink, index2) => 
              <div style={{width: 400}}>
                <center><Vimeo
                video={videoLink}/></center>
              </div>)}
            </Slider>
            
          </div>)}
       
        </div>
      </div>
    )              
  }
}

export default App;


