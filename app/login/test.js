"use client"
import { useState } from 'react';

export default function Form() {

    const [SomePrice, setSomePrice] = useState('2000');
    const [SomePriceYear, setSomePriceYear] = useState('40');
    const [SomePriceRate, setSomePriceRate] = useState('2');
    const [SomePricePrecent, setpricePrecent] = useState('2');
    const [SomePriceUp, setSomePriceUp] = useState('1');
    const [SomeSaleMonth, setSomeSaleMonth] = useState('12');

    const targetmonth = SomeSaleMonth - 1
    const monthRate = SomePriceRate / 12 / 100
    const monthNum = SomePriceYear * 12
    const firstMonthSub = SomePrice * monthRate
    const monthPayment = (SomePrice * monthRate * (1 + monthRate) ** monthNum) / ((1 + monthRate) ** monthNum - 1)
    const loanMain = [monthPayment - firstMonthSub];
    const loanSub = [firstMonthSub];

    for (let n = 1; n < monthNum; n++) {
    loanMain.push(monthPayment - (monthPayment - loanMain[n - 1]) * (1 + monthRate));
    loanSub.push(monthPayment - loanMain[n]);
}

    const already_pay = monthPayment * targetmonth + SomePrice * SomePricePrecent/100;
    const new_price = SomePrice * (1 + SomePriceUp / 100);
    const remaining_main = SomePrice - loanMain.slice(0, targetmonth).reduce((a, b) => a + b, 0);
    const get_money = new_price - remaining_main;

    function handleSomePrice(e) {
        setSomePrice(e.target.value);
    }

    function handleSomePriceYear(e) {
        setSomePriceYear(e.target.value);
    }

    function handleSomePricePrecent(e) {
        setpricePrecent(e.target.value);
    }

    function handleSomePriceRate(e) {
        setSomePriceRate(e.target.value);
    }

    function handleSomePriceUp(e) {
        setSomePriceUp(e.target.value);
    }

    function handleSomeSaleMonth(e) {
        setSomeSaleMonth(e.target.value);
    }


    return (
        <>
            <h2>Let’s check you in</h2>
            <label>
                總房價:{' '}萬
                <input
                    value={SomePrice}
                    onChange={handleSomePrice}
                />
            </label>
            <br></br>
            <label>
                貸幾年:{' '}年
                <input
                    value={SomePriceYear}
                    onChange={handleSomePriceYear}
                />
            </label>
            <br></br>
            <label>
                貸幾成:{' '}%
                <input
                    value={SomePricePrecent}
                    onChange={handleSomePricePrecent}
                />
            </label>
            <br></br>
            <label>
                房貸利率:{' '}%
                <input
                    value={SomePriceRate}
                    onChange={handleSomePriceRate}
                />
            </label>
            <br></br>
            <label>
                房價年漲幅:{' '}%
                <input
                    value={SomePriceUp}
                    onChange={handleSomePriceUp}
                />
            </label>
            <br></br>
            <label>
                第幾個月賣出:{' '}月
                <input
                    value={SomeSaleMonth}
                    onChange={handleSomeSaleMonth}
                />
            </label>
            <br></br>
            <p>
                頭期: <b>{SomePrice * SomePricePrecent/100}</b>
            </p>
            <p>
                月付: <b>{monthPayment}</b>
            </p>
            <p>
                賺: <b>{get_money}</b>
            </p>
            <p>
                賺百分比: <b>{get_money/already_pay}</b>
            </p>
        </>
    );
}
