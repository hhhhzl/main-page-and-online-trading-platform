import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const propdata = [
  { name: "<-15%", number: 134, color:0},
  { name: "-15~-10%", number: 253, color: 0},
  { name: "-10~-5%", number: 376, color: 0},
  { name: "-5~-2%", number: 402, color: 0},
  { name: "-2~-0%", number: 814,color: 0},
  { name: "0%", number: 125, color: -1},
  { name: "0~2%", number: 326, color: 1},
  { name: "2~5%", number: 127, color: 1 },
  { name: "5~10%", number: 72, color: 1 },
  { name: "10~15%", number: 36, color: 1 },
  { name: ">15%", number: 24, color: 1 }
];

const renderCustomizedLabel = ({x, y, stroke, fill, color, value}) => {
 return (
   <text
     x={x}
     y={y}
     dy={-4}
     fill = {color}
     style={{ 
         fontSize: 12, 
         fontFamily:"Futura-Medium, Futura",
        fontWeight:"500",
        color:"#16CE62",
        lineHeight:"20px",
        letterSpacing:"1px" }} 
     textAnchor={"top"}
   >
     {value}
   </text>
 );

};

export default function BarChartMarket({width}) {
  return (
      <ResponsiveContainer>
    <BarChart width={width} height={width/ 1.767} margin ={{left:0, bottom:0., top:width * 0.1122, bottom:36}} data={propdata}>
      <defs>
            <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
                <stop offset="0%" stopColor="#42E083" stopOpacity={0} />
                    <stop offset="100%"  stopColor="#42E083 " stopOpacity={1} />
                </linearGradient>
		</defs>
        <defs>
            <linearGradient id="MyGradient1" x1="0" y1="100%" x2="0" y2="0%">
                <stop offset="0%" stopColor="#FF3541" stopOpacity={0} />
                    <stop offset="100%"  stopColor="#FF3541" stopOpacity={1} />
                </linearGradient>
		</defs>

        <defs>
            <linearGradient id="gray" x1="0" y1="100%" x2="0" y2="0%">
                <stop offset="0%" stopColor="#C0C3CE" stopOpacity={0} />
                    <stop offset="100%"  stopColor="#C0C3CE" stopOpacity={1} />
                </linearGradient>
		</defs>
      <XAxis dataKey="name" strokeWidth={0} style={{
          height:"20px",
        fontSize: '12px',
        fontFamily: 'Futura-Medium, Futura',
        fontWeight:"500",
        color:"#9C9EAC",
        lineHeight:"20px",
        letterSpacing:"1px",
    }} dy={36}/>    
       <YAxis hide/>
      <Bar dataKey="number" radius={[4, 4, 0, 0]} barSize={24} label ={renderCustomizedLabel}>
      {
      propdata.map((datum, entry, index) => (
        <Cell key={`cell-${index}`}  fill= {datum.color === 0? "url(#MyGradient)" : "url(#MyGradient1)"} color={
            datum.color === 0? "#16CE62" : "#EC1421"
        }/>
        
      ))
    }
        {/* <LabelList dataKey="number" position="top" style={{ fill: "black" , fontSize:"12px"}} /> */}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
  );
};

