import React from 'react';
import './Championships.css';
import Card from '../About_team/Card';
function Championships() {

    const cardData = [
        {
            description: 'وصيف بطل دوري أبطال آسيا عام 2006',
            showSpoiler: true
        },
           
{
    description:'وصيف بطل كأس الاتحاد الآسيوي عام 2009',
    showSpoiler: true
},

{
    description:'تأهل إلى ربع نهائي دوري أبطال آسيا عامي 2007 - 2008',
    showSpoiler: true
},
{
    description:'بطل الدوري السوري رجال 8 مرات مواسم: 1974/1975, 1982/1983، 1983/1984, 1995/1996, 2005/2006, 2006/2007, 2007/2008، 2009/2008'
    ,showSpoiler: true
},
{
    description:`وصيف بطل الدوري السوري رجال 12 مرة مواسم: 1976/1977, 1984/1985, 1986/1987, 1989/1990, 1992/1993، 1994/1995، 1997/1998, 1998/1999, 2000/2001, 2003/2004, 2004/2005, 2009/2010.
`,
showSpoiler: true
},
{
    description:`بطل كأس الجمهورية السورية 8 مرات أعوام: 1982/1983, 1986/1987، 1994/1995، 1995/1996، 2006/2007، 2007/2008، 2008/2009، 2009/2010
`,
showSpoiler: true
},
{
    description:`وصيف بطل كأس الجمهورية السورية مرتين عامي: 1989/1990, 1997/1998.
`,
showSpoiler: true},

{
    description:'بطل كأس السوبر السوري مرتين عامي : 1985, 2008',
showSpoiler:true},

{
    description:'دورة الصالات المغلقة عام 1987',
showSpoiler:true},

{
    description:'دورة الوفاء الثانية بحمص عام 1998',
showSpoiler:true},
{
    description:'بطولة نادي شباب الأردن الدولية عام 2006',
showSpoiler:true},

{
    description:'بطولة حمص الدولية عام 2007',
showSpoiler:true},
{
    description:'بطولة الترتيب العام ستة مواسم',
showSpoiler:true},
{
    description:'البلاي أوف 1995-1996',
showSpoiler:true},
{
    description:`بطولة الدوري السوري للشباب 12 مرة مواسم: 1974-1975، 1978-1979، 1982-1983، 1992-1993، 1998-1999، 2000-2001، 2003-2004، 2004-2005، 2005-2006، 2006-2007، 2008-2009، 2010-2009.
`,
showSpoiler:true},

{
    description:`بطولة الدوري السوري للناشئين 9 مرات مواسم: 1974-1975، 1985-1986، 1987-1988، 1988-1989، 1990-1991، 1997-1998، 2000-2001، 2006-2007، 2009-2010`,
showSpoiler:true},
{
    description:`بطولة الدوري السوري للأشبال 8 مرات مواسم: 1978-1979، 1995-1996، 1996-1997، 1997-1998، 1998-1999، 2000-2001، 2006-2007، 2008-2009`,
    showSpoiler:true},
];
    return (
<>
<div className='cards-container'>
                {cardData.map((card, index) => (
                   <Card 
                   key={index} 
                   title={card.title} 
                   image={card.image} 
                   description={card.description} 
                   showSpoiler={card.showSpoiler} // Pass the showSpoiler value
               />
                ))
                }
            </div>

</>
    )
}

export default Championships