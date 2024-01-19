import React, { useEffect, useState } from 'react';
import { Slider, Progress } from 'antd';

const initialData = [
    {
      "Risk Score": 0,
      "Nigerian Stocks": "18",
      "Foriegn Stocks": "4",
      "Tech Stocks": "2",
      "Emerging Stocks": "7",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "15",
      "Commodities": "7",
      "Real Estate": "12",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 1,
      "Nigerian Stocks": "20",
      "Foriegn Stocks": "5",
      "Tech Stocks": "3",
      "Emerging Stocks": "7",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "6",
      "Commodities": "12",
      "Real Estate": "12",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 2,
      "Nigerian Stocks": "23",
      "Foriegn Stocks": "5",
      "Tech Stocks": "4",
      "Emerging Stocks": "7",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "14",
      "Commodities": "12",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 3,
      "Nigerian Stocks": "26",
      "Foriegn Stocks": "6",
      "Tech Stocks": "4",
      "Emerging Stocks": "7",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "10",
      "Commodities": "12",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 4,
      "Nigerian Stocks": "29",
      "Foriegn Stocks": "7",
      "Tech Stocks": "5",
      "Emerging Stocks": "6",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "6",
      "Commodities": "12",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 5,
      "Nigerian Stocks": "31",
      "Foriegn Stocks": "8",
      "Tech Stocks": "6",
      "Emerging Stocks": "5",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "3",
      "Commodities": "12",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 6,
      "Nigerian Stocks": "35",
      "Foriegn Stocks": "8",
      "Tech Stocks": "7",
      "Emerging Stocks": "3",
      "Nigerian Bonds": "35",
      "Foriegn Bonds": "12",
      "Commodities": "0",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 7,
      "Nigerian Stocks": "45",
      "Foriegn Stocks": "13",
      "Tech Stocks": "12",
      "Emerging Stocks": "7",
      "Nigerian Bonds": "23",
      "Foriegn Bonds": "0",
      "Commodities": "0",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 8,
      "Nigerian Stocks": "45",
      "Foriegn Stocks": "15",
      "Tech Stocks": "15",
      "Emerging Stocks": "9",
      "Nigerian Bonds": "16",
      "Foriegn Bonds": "0",
      "Commodities": "0",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 9,
      "Nigerian Stocks": "45",
      "Foriegn Stocks": "18",
      "Tech Stocks": "17",
      "Emerging Stocks": "11",
      "Nigerian Bonds": "9",
      "Foriegn Bonds": "0",
      "Commodities": "0",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   },
    {
      "Risk Score": 10,
      "Nigerian Stocks": "45",
      "Foriegn Stocks": "20",
      "Tech Stocks": "19",
      "Emerging Stocks": "14",
      "Nigerian Bonds": "2",
      "Foriegn Bonds": "0",
      "Commodities": "0",
      "Real Estate": "0",
      "T-Bills": "0",
      "Alternative": "0"
   }
   ]

const SliderRange = () => {
    const [inputValue, setInputValue] = useState(1);
    const [currentData, setCurrentData] = useState(null);

   //  useEffect(() => {
   //      const newData = initialData.find(item => item['Risk Score'] === inputValue);
   //      setCurrentData(newData);
   //  }, [inputValue]);

    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5555/instruweight');
          const data = await response.json();
         //  console.log("data", data.data)
  
          // Assuming your API response has a structure similar to the initial data
          const newData = data?.data?.find(item => item['riskScore'] === inputValue);
  
          setCurrentData(newData);
        } catch (error) {
          console.error('Error fetching data from the API', error);
        }
      };
  
      // Fetch initial data when the component mounts
      fetchData();
    }, [inputValue]);

    const onChange = (newValue) => {
      setInputValue(newValue);
    };

  return (
    <div className='mx-auto w-full'>

      <div className='bg-gray-50 h-[550px] relative flex w-full items-center justify-center bg-eggplant px-8 py-16'>
         <div className="absolute top-0 left-0 md:right-0 flex -translate-y-1/2 transform justify-center">
            <div className="flex-basis-0 md:flex-basis-auto w-[683px] flex-shrink-0 flex-grow-0 md:w-[300px]">
               <div className="w-[310px] space-y-4 rounded-lg bg-amber-200 p-6 xs:w-[345px] md:w-[448px]">
                  <div className="flex justify-between">
                     <div className="copy-body font-bold" aria-atomic="true" aria-live="polite">
                     Risk Tolerance: {inputValue}
                     </div>
                     <div className="copy-body-sm">Example portfolio</div>
                  </div>
                  <div
                     style={{ transform: 'scale(1)', cursor: 'pointer' }}
                     className="h-1.5 w-full rounded-full bg-gradient-to-r from-ambient-orange to-lavender"
                  >
                     <Slider
                        min={0}
                        max={10}
                        onChange={onChange}
                     />
                  </div>
               </div>
            </div>
         </div>
         <div aria-atomic="true" aria-live="polite" className="w-full max-w-[683px] space-y-4">
            {currentData && (
               <React.Fragment>
                  {currentData['nigerianStocks'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Nigerian Stocks</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['nigerianStocks']} />
                        </div>
                     </div>
                  }

                  {currentData['foriegnStocks'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Foriegn Stocks</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['foriegnStocks']} />
                        </div>
                     </div>
                  }

                  {currentData['techStocks'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Tech Stocks</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['techStocks']} />
                        </div>
                     </div>
                  }
                  
                  {currentData['emergingStocks'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Emerging Stocks</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['emergingStocks']} />
                        </div>
                     </div>
                  }

                  {currentData['nigerianBonds'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Nigerian Bonds</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['nigerianBonds']} />
                        </div>
                     </div>
                  }

                  {currentData['foriegnBonds'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Foriegn Bonds</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['foriegnBonds']} />
                        </div>
                     </div>
                  }

                  {currentData['commodities'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Commodities</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['commodities']} />
                        </div>
                     </div>
                  }  

                  {currentData['realEstate'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Real Estate</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['Real Estate']} />
                        </div>
                     </div>
                  }   

                  {currentData['tBills'] == 0? "" : 
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">T-Bills</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['tBills']} />
                        </div>
                     </div>
                  }

                  {currentData['alternative'] == 0? "" :
                     <div className="grid grid-cols-12 text-gray-700" style={{ '--max-allocation': 0.45, transformOrigin: '50% 50% 0px' }}>
                        <div className="col-span-5 flex items-center pr-2 md:col-span-4" style={{ transformOrigin: '50% 50% 0px' }}>
                           <span className="truncate overflow-ellipsis">Alternative</span>
                        </div>
                        <div className="col-span-7 -mb-px md:col-span-8" style={{ transformOrigin: '50% 50% 0px' }}>
                           <Progress status="active" strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={currentData['Alternative']} />
                        </div>
                     </div>
                  }

               </React.Fragment>
               
            )}

            {currentData && (
               <React.Fragment>
                  <div className="grid grid-cols-2 justify-between gap-x-4 text-steel xl:grid-cols-3">
                     {currentData['nigerianStocks'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Nigerian Stocks</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['foriegnStocks'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Foriegn Stocks</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['techStocks'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Tech Stocks</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['emergingStocks'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Emerging Stocks</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['nigerianBonds'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Nigerian Bonds</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['foriegnBonds'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Foriegn Bonds</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['commodities'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Commodities</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['realEstate'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Real Estate</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['tBills'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>T-Bills</div>
                           <div>0%</div>
                        </div>
                     }
                     {currentData['alternative'] == 0 &&
                        <div className="col-span-1 flex justify-between">
                           <div>Alternative</div>
                           <div>0%</div>
                        </div>
                     }

                  </div>
               </React.Fragment>
            )}
         </div>
      </div>

    </div>
  );
};
export default SliderRange;