'use strict';
alert ('Hi') ;

const TAXES = 0.2;

let moneyBalanceStr = prompt( 'How much money do you have?' , '72000' ) ;
let moneyBalanceNum = Number( moneyBalanceStr ) ;
let $phoneStr = prompt( 'How much is the cell phone before taxes?' , '16800' ) ;
let $phoneNum = Number( $phoneStr ) + Number( $phoneStr ) * TAXES ;
let $accessoriesStr = prompt( 'How much are the accessories before taxes?' , '6403' ) ;
let $accessoriesNum = Number( $accessoriesStr ) + Number( $accessoriesStr ) * TAXES ;
let maxFundsForAccessoriesStr = prompt('How much money are you willing to spend for accessories?' , '91468' ) ;
let maxFundsForAccessoriesNum = Number( maxFundsForAccessoriesStr ) ;
let boughtPhones = 0;
let boughtAccessories = 0;

// // console.log( moneyBalance );
// // console.log( $phone );
// // alert(typeof moneyBalanceNum);
// // alert( Number (moneyBalance) - 1 );


while ( moneyBalanceNum >= $phoneNum ) {
    
    boughtPhones ++ ;
    moneyBalanceNum -= $phoneNum ;
    
}

// let $change = moneyBalanceNum ;
// alert( boughtPhones ) ;
alert('Ваша сдача после покупки ' + boughtPhones + ' телефонов равняется ' + moneyBalanceNum + ' . Далее купим аксессуары, чтобы они не превышали сумму ' + maxFundsForAccessoriesNum + ' . ' );

while ( moneyBalanceNum >= $accessoriesNum ) {
    
    boughtAccessories ++ ;
    moneyBalanceNum -= $accessoriesNum ;
    if ( (boughtAccessories * $accessoriesNum) > maxFundsForAccessoriesNum ) {
        boughtAccessories --;
        moneyBalanceNum += $accessoriesNum;
        break;
    }
    
}

alert( 'Хватило на ' + boughtAccessories + ' аксессуаров. ' );

alert( 'Итого куплено ' + boughtPhones + ' телефона/ов, ' + boughtAccessories + ' аксессуара/ов. И еще осталась сдача ' + moneyBalanceNum + '.');


