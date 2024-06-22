import {Input} from './components'
import {useState} from 'react'
import useCurrencyinfo from './customhooks/useCurrencyinfo'
function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedamount,setConvertedamount]=useState(0);
  const currencyinfo=useCurrencyinfo(from);
  const options=Object.keys(currencyinfo);
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedamount(amount)
    setAmount(convertedamount)

  }
  const convert=()=>{
    setConvertedamount(amount*currencyinfo[to])
  }

  return (
    <>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                //oncurrencychange={(currency)=>setAmount(amount)}
                                oncurrencychange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onamountchange={(amount)=>setAmount(amount)}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedamount}
                                currencyoptions={options}
                                oncurrencychange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable

                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default App
