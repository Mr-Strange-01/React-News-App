import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    article = [{
            "source": {
                "id": null,
                "name": "Itc.ua"
            },
            "author": "Андрій Русанов",
            "title": "Как видеокарта NVIDIA GeForce GT 730 за $20 стала модной сумочкой за $1000",
            "description": "Если есть старая видеокарта NVIDIA, не стоит спешить ее выбрасывать. Можно сделать модный аксессуар и продать в 50 раз дороже. GPU Purse — именно такая сумочка для фанаток компьютеров.",
            "url": "https://itc.ua/news/kak-vydeokarta-nvidia-geforce-gt-730-za-20-stala-modnoj-sumochkoj-za-1000/",
            "urlToImage": "https://itc.ua/wp-content/uploads/2024/09/IMG_9229.jpg",
            "publishedAt": "2024-09-09T13:14:03Z",
            "content": "NVIDIA, . 50 . GPU Purse .\r\n 2014 GeForce GT 730 GK208 2 . , 1,5 . , .\r\nGPU Purse . , . Gigabyte , . , . , GT 730. , - .\r\nTesla P100, , . , NVIDIA H100 $65 536 (- ).\r\n« GPU»: nVIDIA GeForce 256 25 \r\n… [+22 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "The Boom in Zero-Day Options Is Coming for Tesla and Nvidia",
            "description": "Brokers and exchanges discuss expanding #0dte to options on individual stocks.",
            "url": "https://biztoc.com/x/ecb6f0e3c6e95e98",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-09T13:13:34Z",
            "content": "Brokers and exchanges discuss expanding #0dte to options on individual stocks.\r\nThis story appeared on wsj.com, 2024-09-09."
        }, {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Ariel Zilber",
            "title": "Comedian escorted away after heckling Nancy Pelosi at book signing: ‘What stocks should I buy?’",
            "description": "\"Nancy, you’re the greatest options trader of all time,\" the comedian said. \"I just want to know what stocks I should buy.\"",
            "url": "https://nypost.com/2024/09/09/business/comedian-trolls-nancy-pelosi-what-stocks-should-i-buy/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/09/89318575.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-09-09T13:12:25Z",
            "content": "A comedian was escorted away from former House Speaker Nancy Pelosi after he posed as a Democrat and heckled her over her stock trading, calling her “the greatest options trader of all time” and aski… [+4122 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures Rally As Inflation Reports Loom; Apple, Nvidia, Tesla Rebound",
            "description": "Apple rose ahead of its iPhone 16 product launch, while Nvidia and Tesla bounced.",
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-inflation-apple-nvidia-stock-tesla/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2021/09/Stock-wallstreetflag-01-adobe.jpg",
            "publishedAt": "2024-09-09T13:07:19Z",
            "content": "The Dow Jones Industrial Average and other major stock indexes rebounded Monday ahead of a set of critical inflation reports due this week. Three early winners on the stock market today were Apple (A… [+6199 chars]"
        }, {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Research and Markets",
            "title": "Robot Cars and Trucks Market Report 2024: Autonomous Vehicles and Drones Integration Set to Revolutionize Transportation - Global Long-term Forecast to 2028 and 2033",
            "description": "Dublin, Sept. 09, 2024 (GLOBE NEWSWIRE) -- The \"Robot Cars and Trucks Market Report 2024\" report has been added to ResearchAndMarkets.com's offering.The robot cars and trucks market size has grown rapidly in recent years. It will grow from $0.79 billion in 20…",
            "url": "https://www.globenewswire.com/news-release/2024/09/09/2942904/28124/en/Robot-Cars-and-Trucks-Market-Report-2024-Autonomous-Vehicles-and-Drones-Integration-Set-to-Revolutionize-Transportation-Global-Long-term-Forecast-to-2028-and-2033.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
            "publishedAt": "2024-09-09T13:07:00Z",
            "content": "Dublin, Sept. 09, 2024 (GLOBE NEWSWIRE) -- The \"Robot Cars and Trucks Market Report 2024\" report has been added to ResearchAndMarkets.com's offering.\r\nThe robot cars and trucks market size has grown … [+6641 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Onliner.by"
            },
            "author": "Onliner | Авто",
            "title": "Кроссовер Zeekr 7Х заказали более 20 000 раз. Продажи начались неделю назад (обновлено)",
            "description": "4,8-метровый кроссовер 7Х не случайно имеет семерку в названии: технически он близок седану 007, который также продается компанией. Новичок составит конкуренцию аналогичным моделям, но прежде всего — Tesla Model Y. За первую неделю после предварительного стар…",
            "url": "https://auto.onliner.by/2024/09/09/zeekr-oficialno-predstavil",
            "urlToImage": "https://content.onliner.by/news/default/6df985a7e97a8d6b6a75f7928f53b82e.jpg",
            "publishedAt": "2024-09-09T13:00:34Z",
            "content": "4,8- 7 : 007, . , Tesla Model Y. 20 000 . \r\n , 007. , . , Zeekr .\r\nZeekr 7X PMA2+, SEA. 4825 , 2925 . Carnewschina , Geely Golden Brick LFP 75 ·. 800 500 15 . Zeekr 7X NMC, CATL ( 100 ·).   780 CLTC.… [+53 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Knack.be"
            },
            "author": "Urbain Vandormael",
            "title": "Volkswagen Group: hoe dramatisch is de situatie voor Duitse nummer 1 in Europa?",
            "description": "Als reactie op de tegenvallende verkoop, hoogoplopende productiekosten en sombere vooruitzichten moet Volkswagen zwaar besparen en gaat het sociaal akkoord met de vakbond op de schop. Daardoor vervalt voor 120.000 Duitse VW-werknemers hun werkzekerheid tot 20…",
            "url": "https://www.knack.be/nieuws/auto/volkswagen-group-hoe-dramatisch-is-de-situatie-voor-duitse-nummer-1-in-europa/",
            "urlToImage": "https://img.static-rmg.be/a/view/q75/w1600/h836/f50.00,50.00/6537314/audi-brussels-is-het-eerste-slachtoffer-van-de-problemen-van-volkswagen-in-duitsland-3-jpg.jpg",
            "publishedAt": "2024-09-09T13:00:00Z",
            "content": "Als reactie op de tegenvallende verkoop, hoogoplopende productiekosten en sombere vooruitzichten moet Volkswagen zwaar besparen en gaat het sociaal akkoord met de vakbond op de schop. Daardoor verval… [+9116 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "Här kan du titta på iPhone-presentationen",
            "description": "Ikväll klockan 19.00 är det dags\n\n\n\n\n\n\n\n\n\n\nDå var det dags i år igen för Apple att presentera sina senaste iPhones. Om vi får tro de senaste ryktena kommer vi utöver iPhone 16-serien även att se nya modeller av \"vanliga\" Apple Watch och Apple Watch SE, men ka…",
            "url": "https://feber.se/mobil/har-kan-du-titta-pa-iphone-presentationen-/471563/",
            "urlToImage": "https://i.ytimg.com/vi/uarNiSl_uh4/hqdefault.jpg",
            "publishedAt": "2024-09-09T13:00:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+25099 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Snopes.com"
            },
            "author": "Alex Kasprak",
            "title": "Nikola Tesla Predicted Cell Phones in 1926?",
            "description": "In 1926, scientist and inventor Nikola Tesla described a future \"when wireless is perfectly applied the whole earth\" in a way that allows humans \"to communicate with one another instantly irrespective of distance\" with the clarity of a face-to-face meeting us…",
            "url": "https://www.snopes.com//fact-check/tesla-predicted-cell-phones/",
            "urlToImage": "https://mediaproxy.snopes.com/width/1200/https://media.snopes.com/2024/09/newtesla.png",
            "publishedAt": "2024-09-09T13:00:00Z",
            "content": "Claim:\r\n In 1926, scientist and inventor Nikola Tesla described a future \"when wireless is perfectly applied the whole earth\" in a way that allows humans \"to communicate with one another instantly ir… [+2883 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Planetizen.com"
            },
            "author": "Mary Hammon",
            "title": "Tesla’s Self-Driving Still Not Working in Las Vegas Tunnels",
            "description": "Tesla’s Self-Driving Still Not Working in Las Vegas Tunnels\nMary Hammon\nMon, 09/09/2024 - 06:00\n\n\n \n Primary Image\r\n\n \n\n\n\r\n\n \n\n\n It’s been a rough couple months for Elon-Musk-related ventures, with Tesla sales falling, X’s financial woes, Brazil banning the s…",
            "url": "https://www.planetizen.com/news/2024/09/131675-teslas-self-driving-still-not-working-las-vegas-tunnels",
            "urlToImage": "https://www.planetizen.com/files/images/Elon_Musk_Accelerates_the_Boring_%2845716125474%29.jpeg",
            "publishedAt": "2024-09-09T13:00:00Z",
            "content": "Its been a rough couple months for Elon-Musk-related ventures, with Tesla sales falling, Xs financial woes, Brazil banning the social media platform, and news that last years SpaceX rocket explosion … [+2201 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Autobild.de"
            },
            "author": "Andreas Reiners",
            "title": "Was machen diese neuen Model 3 auf dem überwucherten Grundstück",
            "description": "Dieser Anblick ist reichlich kurios: Auf einem Feld in Tampa (USA) stehen zahlreiche Tesla Model 3, die meisten fabrikneu. Alle Infos dazu.",
            "url": "https://www.autobild.de/artikel/tesla-model-3-mehrere-neuwagen-auf-verwilderter-wiese-26436669.html",
            "urlToImage": "https://i.auto-bild.de/ir_img/3/6/6/3/1/1/5/tesla169-4687151c4b688995.jpg?impolicy=og_images",
            "publishedAt": "2024-09-09T13:00:00Z",
            "content": "Die Szenerie wirkt ein bisschen wie aus der Zombie-Serie \"The Walking Dead\". Zahlreiche Tesla-Modelle stehen auf einer verwilderten Wiese in Tampa (USA) herum. Verlassen, einfach abgestellt. Fehlen e… [+881 chars]"
        }, {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": "Андрей Ставицкий",
            "title": "Tesla изобрела беспроводную зарядку для автомобилей",
            "description": "Корпорация Tesla изобрела беспроводную станцию для зарядки электрических автомобилей. Об этом сообщает издание Electrek",
            "url": "https://lenta.ru/news/2024/09/09/wireless-ev/",
            "urlToImage": "https://icdn.lenta.ru/images/2024/09/09/12/20240909124035160/share_3fe48626f550e04aa3c22cd5671ccc07.jpg",
            "publishedAt": "2024-09-09T12:55:44Z",
            "content": "Tesla . Electrek.\r\n , , . , Tesla . , .\r\n , . . « , », .\r\n Electrek , , . Tesla , 95 .\r\n Tesla . Warner Bros. ."
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "A wild Elon Musk in the White House could kill Trump's legacy",
            "description": "On the evening of August 12, Tesla (TSLA) CEO and X (formerly known as Twitter) owner Elon Musk hosted a nearly two-hour long \"conversation\" with former U.S. President and Republican presidential nominee Donald J. Trump on his social media platform.\nThe eclec…",
            "url": "https://biztoc.com/x/e9e4a3e7e4ce26da",
            "urlToImage": "https://biztoc.com/cdn/e9e4a3e7e4ce26da_s.webp",
            "publishedAt": "2024-09-09T12:51:14Z",
            "content": "On the evening of August 12, Tesla (TSLA) CEO and X (formerly known as Twitter) owner Elon Musk hosted a nearly two-hour long \"conversation\" with former U.S. President and Republican presidential nom… [+133 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Investing.com",
            "title": "Eaton partners with Tesla to enhance home energy systems",
            "description": "Eaton partners with Tesla to enhance home energy systems",
            "url": "https://www.investing.com/news/company-news/eaton-partners-with-tesla-to-enhance-home-energy-systems-93CH-3607168",
            "urlToImage": "https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png",
            "publishedAt": "2024-09-09T12:46:24Z",
            "content": "PITTSBURGH - Eaton (NYSE:ETN), a leader in intelligent power management, has announced an upcoming collaboration with electric vehicle and clean energy company Tesla (NASDAQ:TSLA). The partnership ai… [+5750 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Bobby Green",
            "title": "Nya skisser på Skoda Elroq",
            "description": "Nu avslöjas mer av utsidan\n\n\n\n\n\n\n\n\n\n\n\n\nI oktober är det premiär för Elroq som är Skodas nya eldrivna SUV av det lite mindre slaget. Den baseras på MEB-plattformen och efter att ha fått se skisser på insidan är det nu dags att visa upp skisser på utsidan. Bile…",
            "url": "https://feber.se/bil/nya-skisser-pa-skoda-elroq/471575/",
            "urlToImage": "https://static.feber.se/article_images/59/81/70/598170.jpg",
            "publishedAt": "2024-09-09T12:40:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+25892 chars]"
        }, {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": "Варвара Кошечкина",
            "title": "Подполье сообщило о подготовке на Украине полумиллионной «армии вторжения». Где ВСУ хотят нанести удар?",
            "description": "Координатор николаевского подполья Сергей Лебедев сообщил, что президент Украины Владимир Зеленский готовит «армию вторжения» для атаки на черноморский регион. По его словам, Вооруженные силы республики (ВСУ) планируют нанести удар весной 2025 года",
            "url": "https://lenta.ru/news/2024/09/09/podpolie-soobschilo-chto-ukraina-gotovit-armiyu-vtorzheniya-iz-polumilliona-boytsov-kogda-i-kuda-oni-hotyat-nanesti-udar/",
            "urlToImage": "https://icdn.lenta.ru/images/2024/09/09/15/20240909150338518/share_b96f5ce5f40fc636e9fa3bf46f01ae0a.jpg",
            "publishedAt": "2024-09-09T12:37:00Z",
            "content": ", « » . , () 2025 .\r\n , . « , . (...) , , . , », .\r\n: Sofiia Gatilova / Reuters\r\n, . , , .\r\n , , . « », .\r\n , \r\n, () .\r\n: Ivan Antypenko / Reuters\r\n, , « ». .\r\nTesla SpaceX , .\r\n Zero Hedge, .\r\n , , … [+4 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production",
            "description": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production ReutersView Full Coverage on Google News",
            "url": "https://biztoc.com/x/2ee52c7076acbfca",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-09T12:28:53Z",
            "content": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production ReutersView Full Coverage on Google News\r\nThis story appeared on news.google.com, 2024-09-09."
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "investors.com",
            "title": "Tesla China Sales Roar Back In August. Elon Musk Says This About The Shanghai Plant",
            "description": "This may happen as a result of the following:\n- Javascript is disabled or blocked by an extension (ad blockers for example)\n- Your browser does not support cookies\nReference ID: #0741a097-6ea7-11ef-b76f-19947d8f65b5\nThis may happen as a result of the followin…",
            "url": "https://biztoc.com/x/20418f39bbf3cb8f",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-09T12:28:37Z",
            "content": "This may happen as a result of the following:- Javascript is disabled or blocked by an extension (ad blockers for example)- Your browser does not support cookiesReference ID: #0741a097-6ea7-11ef-b76f… [+121 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Terra.com.br"
            },
            "author": "Reuters",
            "title": "Funcionários de grandes empresas de tecnologia dos EUA apoiam Kamala de forma esmagadora, mostram dados de doações",
            "description": "Os funcionários de muitas das maiores empresas de tecnologia dos Estados Unidos apoiam de forma ...",
            "url": "https://www.terra.com.br/noticias/mundo/funcionarios-de-grandes-empresas-de-tecnologia-dos-eua-apoiam-kamala-de-forma-esmagadora-mostram-dados-de-doacoes,1eddfc7a231816cd62f5ed8d32792fa95oerba6m.html",
            "urlToImage": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
            "publishedAt": "2024-09-09T12:26:19Z",
            "content": "Os funcionários de muitas das maiores empresas de tecnologia dos Estados Unidos apoiam de forma esmagadora a candidata democrata à Presidência dos EUA, Kamala Harris, de acordo com dados de doações, … [+4491 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Phonandroid"
            },
            "author": "Kevin Dachez",
            "title": "La recharge sans fil bientôt réalité chez Tesla ? Ces brevets le confirment",
            "description": "Alors que Tesla s'apprête à présenter officiellement son taxi autonome en octobre 2024, la marque poursuit visiblement ses travaux sur une technologie de recharge sans fil, la preuve avec ces demandes de brevets. La recharge sans fil pour les voitures...",
            "url": "https://www.phonandroid.com/la-recharge-sans-fil-bientot-realite-chez-tesla-ces-brevets-le-confirment.html",
            "urlToImage": "https://wp-pa.phonandroid.com/uploads/2024/09/tesla-brevets-recharge-wireless-2.jpg",
            "publishedAt": "2024-09-09T12:23:55Z",
            "content": "Alors que Tesla s'apprête à présenter officiellement son taxi autonome en octobre 2024, la marque poursuit visiblement ses travaux sur une technologie de recharge sans fil, la preuve avec ces demande… [+2565 chars]"
        }, {
            "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
            },
            "author": "ZEIT ONLINE: News -",
            "title": "Wahlkampf: Linke: Brandenburg muss Tesla «Einhalt gebieten»",
            "description": "Hier finden Sie Informationen zu dem Thema „Wahlkampf“. Lesen Sie jetzt „Linke: Brandenburg muss Tesla \"Einhalt gebieten\"“.",
            "url": "https://www.zeit.de/news/2024-09/09/linke-brandenburg-muss-tesla-einhalt-gebieten",
            "urlToImage": "https://img.zeit.de/news/2024-09/09/linke-brandenburg-muss-tesla-einhalt-gebieten-image-group/wide__1300x731",
            "publishedAt": "2024-09-09T12:21:18Z",
            "content": "Knapp zwei Wochen vor der Landtagswahl in Brandenburg nimmt die Linke den US-Elektroautobauer Tesla ins Visier. Die Arbeitsbedingungen in der einzigen europäischen Tesla-Fabrik in Grünheide bei Berli… [+1539 chars]"
        }, {
            "source": {
                "id": null,
                "name": "STERN.de"
            },
            "author": "STERN.de",
            "title": "Wahlkampf: Linke: Brandenburg muss Tesla \"Einhalt gebieten\"",
            "description": "Der US-Autobauer Tesla hat in Grünheide Tausende Arbeitsplätze geschaffen. Aber die Art und Weise trifft bei der Linken auf Kritik. Die Bundesgeschäftsführerin nutzt einen drastischen Begriff.",
            "url": "https://www.stern.de/gesellschaft/regional/berlin-brandenburg/wahlkampf--linke--brandenburg-muss-tesla--einhalt-gebieten--35049238.html",
            "urlToImage": "https://image.stern.de/35049240/t/0P/v1/w1440/r1.7778/-/09--gu3ojti3mmv16axw800h600jpeg---be0084b1b56f1126.jpg",
            "publishedAt": "2024-09-09T12:21:18Z",
            "content": "Der US-Autobauer Tesla hat in Grünheide Tausende Arbeitsplätze geschaffen. Aber die Art und Weise trifft bei der Linken auf Kritik. Die Bundesgeschäftsführerin nutzt einen drastischen Begriff.\r\nKnapp… [+1720 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "OnePlus 13 släpps i oktober",
            "description": "Drivs av Snapdragon 8 Gen 4\n\n\n\n\n\n\nOnePlus har officiellt meddelat att deras nästa flaggskeppstelefon, OnePlus 13, kommer att lanseras i oktober. Antagligen kommer presentationen av telefonen att sammanfalla med Qualcomms Snapdragon Summit, där Snapdragon 8 Ge…",
            "url": "https://feber.se/mobil/oneplus-13-slapps-i-oktober/471574/",
            "urlToImage": "https://static.feber.se/article_images/59/81/68/598168.jpg",
            "publishedAt": "2024-09-09T12:20:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+25344 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Ixbt.com"
            },
            "author": "jin@ixbt.com (Jin)",
            "title": "Пользователи не могут зарегистрировать новые учетные записи Google с российскими номерами",
            "description": "Пользователи в России сообщают, что они не могут зарегистрировать новые учетные записи Google с российскими мобильными номерами. \r\n Изображение Fastflux Как сообщает Telegram-канал «Бэкдор», который проверил информацию, сервис выдаёт ошибку: «Этот номер нельз…",
            "url": "https://www.ixbt.com/news/2024/09/09/polzovateli-ne-mogut-zaregistrirovat-novye-uchetnye-zapisi-google-s-rossijskimi-nomerami.html",
            "urlToImage": "https://www.ixbt.com/img/n1/news/2024/8/1/Снимок%20экрана%202024-09-09%20152005_large.jpg",
            "publishedAt": "2024-09-09T12:18:00Z",
            "content": ", Google .\r\n Telegram- «», , : « ».\r\n Google .\r\n<ul><li> 15:25 Chery Tiggo Cross. </li><li> Google : 2</li><li> 15:041BMW X3 . , . </li><li> 14:562Porsche  , . Taycan Turbo S Celestial Jade. </li><li… [+3242 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Archiv.hn.cz"
            },
            "author": "Ondřej Charvát",
            "title": "Dvě třetiny peněz na dotace pro elektroauta jsou pryč. Český zákazník přitom nestojí o Škodu, radši koupí Teslu",
            "description": "Americká automobilka Tesla letos v Česku drtí elektrickou konkurenci. Na trhu, který oživila evropská dotace pro firmy a podnikatele na pořízení elektrických vozů, za sebou v dálce nechává domácí Škodu Auto, švédsko-čínské Volvo nebo německý Volkswagen. Zatím…",
            "url": "https://archiv.hn.cz/c1-67365410-cesky-zakaznik-ma-jasno-pokud-chce-elektroauto-misto-domaci-skody-sahne-po-tesle",
            "urlToImage": "https://img.ihned.cz/attachment.php/720/79678720/4Wh6jT1QvRVI2p53ut9enwPA0dloBJxk/tag_reuters.com_2024_newsml_RC2719ARNHG2_1534462437.jpg",
            "publishedAt": "2024-09-09T12:18:00Z",
            "content": "V prbhu platebního procesu se nco pokazilo. Zkuste prosíme opakovat platbu pozdji.\r\nVrate se zpt a zkuste to znovu, nebo vyberte jiný zpsob platby.\r\nVrate se zpt a zkuste to znovu, nebo vyberte jiný … [+189 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Biotech Stocks: Lung Cancer Treatment Outflanks Merck's Keytruda",
            "description": "Summit shares jumped Monday after positive late-stage indications vs. Merck's Keytruda. The biotech stock rallied 30%.",
            "url": "https://www.investors.com/news/technology/biotech-stocks-lung-cancer-treatment-outflanks-mercks-keytruda/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2017/12/Stock-Biotech-13-Adobe.jpg",
            "publishedAt": "2024-09-09T12:06:22Z",
            "content": "Biotech stock Summit Therapeutics (SMMT) rocketed, Dow Jones pharmaceutical leader Merck (MRK) skidded lower early Monday, after preliminary analysis showed positive results of a late-stage study tre… [+1594 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Europapress.es"
            },
            "author": null,
            "title": "El proveedor de baterías de Tesla, Panasonic, prepara la producción en masa de celdas de alta capacidad",
            "description": "Uno de los proveedores de baterías de Tesla, la japonesa Panasonic Energy, ha informado este lunes de que está lista para arrancar con la producción en masa de sus celdas para coches eléctricos de alta capacidad en un momento en el que dice que tiene la capac…",
            "url": "https://www.europapress.es/motor/sector-00644/noticia-proveedor-baterias-tesla-panasonic-prepara-produccion-masa-celdas-alta-capacidad-20240909140520.html",
            "urlToImage": "https://img.europapress.es/fotoweb/fotonoticia_20240909140520_1200.jpg",
            "publishedAt": "2024-09-09T12:05:20Z",
            "content": "MADRID, 9 Sep. (EUROPA PRESS) - \r\n Uno de los proveedores de baterías de Tesla, la japonesa Panasonic Energy, ha informado este lunes de que está lista para arrancar con la producción en masa de sus … [+1235 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Diego Gutiérrez",
            "title": "Tras mucho tiempo de espera, Panasonic está lista para fabricar la batería más moderna de Tesla",
            "description": "Panasonic Energy, el gigante japonés que ha sido un socio clave de Tesla durante años, ha culminado con éxito los preparativos para la producción en masa de sus innovadoras baterías con celdas 4680, una de las tecnologías más esperadas de Tesla en los últimos…",
            "url": "https://www.hibridosyelectricos.com/coches/mucho-tiempo-espera-panasonic-esta-lista-fabricar-bateria-mas-moderna-tesla_75870_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/77/76/44/celdas-baterias-4680-coches-electricos-tesla-cybertruck-2_17_2000x1126.jpeg",
            "publishedAt": "2024-09-09T12:05:04Z",
            "content": "Panasonic Energy, el gigante japonés que ha sido un socio clave de Tesla durante años, ha culminado con éxito los preparativos para la producción en masa de sus innovadoras baterías con celdas 4680, … [+3271 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Tristan Carballeda",
            "title": "Pourquoi 2025 est l’année ou jamais pour acheter une voiture électrique ?",
            "description": "Le marché de la voiture électrique arrive à maturité, avec des modèles à moins de 25 000 euros. Le moment parfait pour passer à la caisse.",
            "url": "https://www.presse-citron.net/pourquoi-2025-est-lannee-ou-jamais-pour-acheter-une-voiture-electrique/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/07/renault-megane-voiture-electrique.jpg",
            "publishedAt": "2024-09-09T12:03:53Z",
            "content": "Renault, Citroën, Fiat, Dacia, Volkswagen, Hyundai et peut-être Tesla. Toutes ces marques vont ou ont commercialisé des voitures électriques à moins de 25000 euros. Ce prix, affiché depuis des mois c… [+2791 chars]"
        }, {
            "source": {
                "id": null,
                "name": "NeoTeo"
            },
            "author": "Lisandro Pardo",
            "title": "«Smartphones sobre ruedas»: Coches eléctricos, ¿ladrillos digitales?",
            "description": "Smartphones, tablets, Smart TVs, cámaras, equipos de gimnasia, cuadros digitales, lavadoras, baterías… tarde o temprano, siempre sucede lo mismo: El fabricante tira la toalla, y todas las funciones que dependen de un servidor remoto o una app se esfuman en el…",
            "url": "https://www.neoteo.com/smartphones-sobre-ruedas-coches-electricos-ladrillos-digitales/",
            "urlToImage": null,
            "publishedAt": "2024-09-09T12:00:26Z",
            "content": "Smartphones, tablets, Smart TVs, cámaras, equipos de gimnasia, cuadros digitales, lavadoras, baterías tarde o temprano, siempre sucede lo mismo: El fabricante tira la toalla, y todas las funciones qu… [+2279 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Ed Garsten, Senior Contributor, \n Ed Garsten, Senior Contributor\n https://www.forbes.com/sites/edgarsten/",
            "title": "EV Charging Network Growth Lacking, Study Shows",
            "description": "The latest EV index from HERE Technologies and SBD Automotive shows the EV charging network growing, but not at an adequate rate.",
            "url": "https://www.forbes.com/sites/edgarsten/2024/09/09/ev-charging-network-growth-lacking-study-shows/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64dbd1eb2e0da957e8d8ae1f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-09T12:00:00Z",
            "content": "The latests HERE-SBD EV Index shows the U.S. charging network growing, but most states do not have ... [+] an optimal ratio of EVs to public charging points.\r\ngetty\r\nThe good news for drivers of batt… [+6761 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Trefis Team, Contributor, \n Trefis Team, Contributor\n https://www.forbes.com/sites/greatspeculations/people/trefis/",
            "title": "Nio Stock Hits Accelerator With 14% Rise Post Q2 Results. Will The Momentum Continue?",
            "description": "Chinese luxury electric vehicle maker Nio stock published a narrower-than-expected loss for Q2.",
            "url": "https://www.forbes.com/sites/greatspeculations/2024/09/09/nio-stock-hits-accelerator-with-14-rise-post-q2-results-will-the-momentum-continue/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66de5ee61533834556b30d94/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-09-09T12:00:00Z",
            "content": "SHENZHEN, CHINA - 2024/07/24: Customers leave the Chinese multinational automobile manufacturer, NIO ... [+] store and logo in Shenzhen, China. (Photo by Serene Lee/SOPA Images/LightRocket via Getty … [+3451 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "LG visar upp töjbar skärm på modeshow",
            "description": "Kommer vi ha skärmar i kläderna i framtiden?\n\n\n\n\n\n\n\n\n\n\n\n\nUnder årets Seoul Fashion Week i Sydkorea visade LG Display upp de böj- och stretchbara skärmarna som man har utvecklat de senaste åren. \n\nLG visade upp skärmarna i tech-sammanhang på den stora elektron…",
            "url": "https://feber.se/pc/lg-visar-upp-tojbar-skarm-pa-modeshow/471573/",
            "urlToImage": "https://static.feber.se/article_images/59/81/66/598166.jpg",
            "publishedAt": "2024-09-09T12:00:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+22578 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Macitynet.it"
            },
            "author": "Daniele Piccinelli",
            "title": "Tesla prepara rototaxi con carica wireless e raccolta dati",
            "description": "Alcune Tesla con sensori modificati avvistate in USA puntano a robotaxi, lo stesso nei brevetti per la carica wireless delle auto elettriche\n- su macitynet.it Tesla prepara rototaxi con carica wireless e raccolta dati",
            "url": "https://www.macitynet.it/tesla-robotaxi-carica-wireless-dati/",
            "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/12/tesla-ricarica-wirelss.jpg",
            "publishedAt": "2024-09-09T11:59:51Z",
            "content": "Il futuro dell’auto potrebbe arrivare il 10 ottobre con gli ultimi sviluppi nella guida autonoma di Tesla, implementati in un nuovo veicolo robotaxy destinato alle corse a pagamento: entrambi i proge… [+3302 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production - Yahoo Finance",
            "description": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery productionYahoo Finance Japan invests $2.4 billion in subsidies to boost EV battery productionCBT Automotive News Tesla supplier Panasonic ready to make larger 4680 EV batteriesNikkei Asia …",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174954612",
            "urlToImage": null,
            "publishedAt": "2024-09-09T11:53:09Z",
            "content": "Check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your GitHub releases to SourceForge quickly a… [+228 chars]"
        }, {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Elon Musk, Gautam Adani on track to become the world's first two trillionaires, says report",
            "description": "Elon Musk is projected to become the world’s first trillionaire by 2027, according to a report by Informa Connect Academy. Other billionaires like Gautam Adani and Jensen Huang are also expected to reach trillionaire status soon. The report highlights the rap…",
            "url": "https://economictimes.indiatimes.com/news/company/corporate-trends/elon-musk-gautam-adani-on-track-to-become-the-worlds-first-two-trillionaires-says-report/articleshow/113195661.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-113195921,width-1200,height-630,imgsize-1052496,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-09-09T11:52:49Z",
            "content": "According to a recent report by Informa Connect Academy titled \"2024 Trillion Dollar Club,\" Elon Musk, the visionary behind Tesla, SpaceX, and X (formerly Twitter), is on track to become the worlds f… [+2949 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Angelina Jolie, Brad Pitt son Pax reveals shocking scar after terrifying accident - Geo News",
            "description": "Angelina Jolie, Brad Pitt son Pax reveals shocking scar after terrifying accidentGeo News Angelina Jolie And Brad Pitt's Son Pax Totaled His Tesla Two Months Before Nasty E-Bike AccidentYahoo Entertainment Angelina Jolie's Son Pax Gives Her a Standing Ovation…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174954604",
            "urlToImage": null,
            "publishedAt": "2024-09-09T11:52:39Z",
            "content": "Check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your GitHub releases to SourceForge quickly a… [+228 chars]"
        }, {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": null,
            "title": "5 things to know before the stock market opens Monday",
            "description": "Here are the most important news items that investors need to start their trading day.",
            "url": "https://www.cnbc.com/2024/09/09/5-things-to-know-before-the-stock-market-opens-monday.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/108026648-17248626982024-08-28t154128z_1306125662_rc21p9a6k7vy_rtrmadp_0_usa-stocks.jpeg?v=1724862806&w=1920&h=1080",
            "publishedAt": "2024-09-09T11:49:40Z",
            "content": "Here are the most important news items that investors need to start their trading day:\r\n1. Looking for a rebound\r\nStock futures ticked higher Monday after equities tumbled last week. The S&amp;P 500 … [+2826 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Gadgets360.com"
            },
            "author": "Reuters",
            "title": "Elon Musk Denies Report That Claims xAI Held Talks Over Share in Tesla Revenue",
            "description": "Elon Musk has refuted that his AI startup xAI has held talks for a share in future Tesla revenue in return for giving Tesla the access to xAI's technology and resources.",
            "url": "https://www.gadgets360.com/ai/news/elon-musk-denies-ai-startup-xai-talk-over-tesla-revenue-6525664",
            "urlToImage": "https://i.gadgets360cdn.com/large/elon_musk_met_gala_reuters_1652103806246.jpg",
            "publishedAt": "2024-09-09T11:47:45Z",
            "content": "Elon Musk denied a report that his Artificial Intelligence (AI) startup xAI has held talks for a share in future Tesla revenue in return for giving Musk's electric vehicle maker access to xAI's techn… [+1740 chars]"
        }, {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "Matters trådlösa protokoll blir bättre",
            "description": "Thread når version 1.4\n\n\n\n\n\n\nThread är det trådlösa protokollet som bland annat Matter använder, och det uppdateras nu till version 1.4 som ska lösa tidigare problem med tekniken och göra den mer användarvänlig. En av de största förbättringarna är möjligheten…",
            "url": "https://feber.se/pryl/matters-tradlosa-protokoll-blir-battre/471571/",
            "urlToImage": "https://static.feber.se/article_images/59/81/65/598165.jpg",
            "publishedAt": "2024-09-09T11:40:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+23324 chars]"
        }, {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        }, {
            "source": {
                "id": null,
                "name": "Ixbt.com"
            },
            "author": "jin@ixbt.com (Jin)",
            "title": "На границе между РФ и Китаем выстроились огромные пробки новых машин: продавцы массово везут авто по старой цене до повышения утильсбора",
            "description": "На крупнейших погранпереходах с КНР «Забайкальск» и «Благовещенск – Хэйхэ» возник затор автомобильных грузов, о чем сообщили «Известия» со ссылкой на логистические компании. Представители нескольких логистических компаний подтвердили факт крупных заторов, из-…",
            "url": "https://www.ixbt.com/news/2024/09/09/na-granice-mezhdu-rf-i-kitaem-vystroilis-ogromnye-probki-novyh-mashin-prodavcy-massovo-vezut-avto-po-staroj-cene-do.html",
            "urlToImage": "https://www.ixbt.com/img/n1/news/2024/8/1/Снимок%20экрана%202024-09-09%20143622_large.jpg",
            "publishedAt": "2024-09-09T11:37:00Z",
            "content": "«» « – » , «» .\r\n , - - . 12 24 , Delko.\r\n , Shuttle Logistic .\r\n «» 11 , («») .\r\n FM Logistic , 1 .\r\n , , .\r\n- \r\n<ul><li> : : 1 </li><li> 14:31 - . 2026 -12 « </li><li> 14:232 Lada : $60 000 -2107. … [+3100 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Used Tesla Cybertruck Price Continues To Crash",
            "description": "Used Tesla Cybertruck Price Continues To Crash Forbes",
            "url": "https://biztoc.com/x/fbd5647ad6bdb2fc",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-09T11:33:19Z",
            "content": "Used Tesla Cybertruck Price Continues To Crash Forbes\r\nThis story appeared on news.google.com, 2024-09-09."
        }, {
            "source": {
                "id": null,
                "name": "Kommersant.ru"
            },
            "author": null,
            "title": "Илон Маск тянется к триллиону // Совпадают ли прогнозы с реальной стоимостью крупных компаний",
            "description": "Илон Маск может стать первым в мире долларовым триллионером к 2027 году. Такими прогнозами поделилось издание The Guardian. Аналитики указывают, что состояние миллиардера росло в среднем на 110% в год. По оценкам Bloomberg и Forbes, капитал Маска сейчас соста…",
            "url": "https://www.kommersant.ru/doc/7027101",
            "urlToImage": "https://iy.kommersant.ru/SocialPics/7027101_49_2628860_474876900",
            "publishedAt": "2024-09-09T11:28:11Z",
            "content": "2027 . The Guardian. , 110% . Bloomberg Forbes, $240 . SpaceX Tesla. Twitter. 2028- . 123% .\r\n ? ? Lidings : « . , , . , , . \r\n . . 1 , , , , 30-40%. \"\" . , , 2019- 2020 ».\r\n , 2030- LVMH . Meta ( ).… [+140 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Bright.nl"
            },
            "author": "info@bright.nl (Rutger Middendorp)",
            "title": "Duurtest Audi Q4 e-tron: gevoel boven pure logica",
            "description": "Onze autotester Rutger rijdt twee weken met de Audi Q4 e-tron. Een vernieuwde versie met een aandrijflijn die we in meer nieuwe Volkswagen-producten gaan terugvinden. Deze week is het afscheid alweer en daar is toch een traantje geplengd.",
            "url": "https://www.bright.nl/nieuws/1224674/duurtest-audi-q4-e-tron-gevoel-boven-pure-logica.html",
            "urlToImage": "https://webp.br.cdn.pxr.nl/news/2024/09/09/7794b6a15b7cae7923cd7cd374fad2117f442227.jpg?width=1200",
            "publishedAt": "2024-09-09T11:26:33Z",
            "content": "Onze autotester Rutger rijdt twee weken met de Audi Q4 e-tron. Een vernieuwde versie met een aandrijflijn die we in meer nieuwe Volkswagen-producten gaan terugvinden. Deze week is het afscheid alweer… [+2428 chars]"
        }, {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Kinas rymdflygplan har landat efter 268 dagar i rymden",
            "description": "Oklart vad det pysslade med där\n\n\n\n\n\n\n\n\n\n\nKinas namnlösa rymdflygplan har landat igen på jorden efter att ha legat i omloppsbana runt jorden i nästan 9 månader. Det är det obemannade rymdflygplanets tredje flygning till rymden, men exakt vad rymdflygplanet ha…",
            "url": "https://feber.se/vetenskap/kinas-rymdflygplan-har-landat-efter-268-dagar-i-rymden/471572/",
            "urlToImage": "https://i.ytimg.com/vi/_lZfHydMNZY/hqdefault.jpg",
            "publishedAt": "2024-09-09T11:20:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+23890 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Itc.ua"
            },
            "author": "Вадим Карпусь",
            "title": "Рекорд за более чем 2 года: в Украине резко выросли регистрации подержанных авто из-за рубежа. Какие модели самые популярные?",
            "description": "Украинский авторынок продолжают наводнять подержанные автомобили из-за рубежа. В августе на украинский учет поставили более 25,7 тыс. подержанных легковых автомобилей, которые были ввезены из других стран.",
            "url": "https://itc.ua/news/rekord-za-bolee-chem-2-goda-v-ukrayne-rezko-vyrosly-regystratsyy-poderzhannyh-avto-yz-za-rubezha-kakye-modely-samye-populyarnye/",
            "urlToImage": "https://itc.ua/wp-content/uploads/2024/09/foto-1-1-5.jpg",
            "publishedAt": "2024-09-09T11:15:09Z",
            "content": "- . 25,7 . , .\r\n , 25 . , 22%. 29% , 2024 .\r\n 159 . . , 2023 .\r\n . 46% . , 25% . 20% . , 5% . 4% .\r\n , , 8,6 .\r\n 2024 Volkswagen Golf. , Volkswagen 3 10 :\r\n<ul><li>Volkswagen Golf — 1325 ;</li><li>Re… [+270 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures Signal Market Bounce: Apple iPhone 16 On Tap; Palantir, Dell Jump (Live Coverage)",
            "description": "The Apple iPhone 16 unveiling and Oracle earnings kick off the week.",
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-apple-iphone-16-palantir-dell-jump-sp-500/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2024/06/Stock-Apple-WWDC24-03-company.jpg",
            "publishedAt": "2024-09-09T11:14:17Z",
            "content": "Dow Jones futures rose solidly early Monday, along with S&amp;P 500 futures and Nasdaq futures. Apple (AAPL), Oracle (ORCL), Palantir Technologies (PLTR), Dell Technologies (DELL) and Tesla (TSLA) wi… [+7812 chars]"
        }, {
            "source": {
                "id": null,
                "name": "International Business Times"
            },
            "author": "Vidhya Ck",
            "title": "Musk Denies Tesla And xAI Collaboration On AI Technology And Revenue Sharing",
            "description": "\"The xAI models are gigantic, containing, in compressed form, most of human knowledge, and couldn't possibly run on the Tesla vehicle inference computer, nor would we want them to,\" Elon Musk said on X.",
            "url": "https://www.ibtimes.com/musk-denies-tesla-xai-collaboration-ai-technology-revenue-sharing-3742459",
            "urlToImage": "https://d.ibtimes.com/en/full/4543520/there-are-similarities-fellow-tech-mogul-elon-musk.jpg",
            "publishedAt": "2024-09-09T11:12:01Z",
            "content": "Tech mogul Elon Musk denied reports that the artificial intelligence startup xAI will support the electric vehicle manufacturer Tesla in using AI models to develop self-driving technology and that th… [+2935 chars]"
        }, {
            "source": {
                "id": null,
                "name": "International Business Times"
            },
            "author": "Marvie Basilan",
            "title": "Dogecoin Pumps After Elon Musk Floats 'D.O.G.E' Commission – Genius Idea Or 'Odd' Proposal?",
            "description": "Elon Musk is taking Trump's \"appointment\" seriously even as elections have yet to take place and results have yet to be out, and while he is getting much love from those who believe his leadership will bring good to the government, others find it \"odd\" for an…",
            "url": "https://www.ibtimes.com/dogecoin-pumps-after-elon-musk-floats-doge-commission-genius-idea-odd-proposal-3742437",
            "urlToImage": "https://d.ibtimes.com/en/full/4541834/elon-musk-l-has-endorsed-donald-trump-november-election.jpg",
            "publishedAt": "2024-09-09T11:05:01Z",
            "content": "KEY POINTS\r\n<ul><li>DOGE climbed over the weekend and seemed to drag other memecoins in the Sunday rally</li><li>Many X users believe Musk will do the role justice due to his 'track record of innovat… [+4836 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": null,
            "title": "6 Car Models That Are Comparable to Tesla – but Do You Get the Same Quality for the Price?",
            "description": null,
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4dd15b41-bfb4-4555-9dac-fc46f2f5e7a4",
            "urlToImage": null,
            "publishedAt": "2024-09-09T11:00:52Z",
            "content": "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Bobby Green",
            "title": "Ginetta presenterar produktionsversionen av Akula",
            "description": "Har V8:a och manuell låda\n\n\n\n\n\n\nFör fem år sedan visade den brittiska biltillverkaren Ginetta upp konceptbilen Akula. Nu är den här i produktionsutförande och den ser i princip exakt likadan ut fortfarande. Under skalet ruvar en egenutvecklad V8:a på 6,4 lite…",
            "url": "https://feber.se/bil/ginetta-presenterar-produktionsversionen-av-akula/471568/",
            "urlToImage": "https://static.feber.se/article_images/59/81/53/598153.jpg",
            "publishedAt": "2024-09-09T11:00:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+23465 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Hubspot.com"
            },
            "author": "Kayla Schilthuis-Ihrig",
            "title": "Are Marketers More or Less Productive in the Office? [New Data]",
            "description": "Curious where marketers are more productive, the office or home? Discover stats and perspectives about where marketers work and what makes them productive.",
            "url": "https://blog.hubspot.com/marketing/marketers-more-productive-in-office#article",
            "urlToImage": "https://www.hubspot.com/hubfs/are-marketers-more-or-less-productive-in-the-office-1-20240906-7178876.webp",
            "publishedAt": "2024-09-09T11:00:00Z",
            "content": "Theremote work productivity debatewill never end, and frankly, it shouldn't.\r\nLeaders and employees alike should never stop being critical of how time is spent and seeking improved productivity level… [+14333 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Everyeye.it"
            },
            "author": "Alessio Marino",
            "title": "Elon Musk potrebbe diventare il primo triliardario del mondo, relativamente a breve",
            "description": "Una nuova previsione pubblicata in rete evidenzia come Elon Musk potrebbe diventare il primo trilardario del mondo a breve.Un nuovo rapporto pubblicato dall’Informa Connect Academy riferisce che Elon Musk sarebbe sulla buona strada per diventare il primo tril…",
            "url": "https://tech.everyeye.it/notizie/elon-musk-triliardario-mondo-relativamente-breve-740942.html",
            "urlToImage": "https://images.everyeye.it/img-notizie/elon-musk-triliardario-mondo-relativamente-breve-v3-740942.jpg",
            "publishedAt": "2024-09-09T10:55:00Z",
            "content": "Un nuovo rapporto pubblicato dall’Informa Connect Academy riferisce che Elon Musk sarebbe sulla buona strada per diventare il primo triliardario del mondo, e tale traguardo potrebbe raggiungerlo anch… [+1307 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Toyota’s Solid-State Battery Production Plans Approved By Japan's Government - InsideEVs",
            "description": "Toyota’s Solid-State Battery Production Plans Approved By Japan's GovernmentInsideEVs Tesla-supplier Panasonic Energy prepares for high-capacity EV battery productionYahoo Finance Japan invests $2.4 billion in subsidies to boost EV battery productionCBT Autom…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=174954228",
            "urlToImage": null,
            "publishedAt": "2024-09-09T10:53:35Z",
            "content": "Check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your GitHub releases to SourceForge quickly a… [+228 chars]"
        }, {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Workers at several large US tech companies overwhelmingly back Kamala Harris, data shows",
            "description": "Employees at major U.S. tech companies like Alphabet, Amazon, and Microsoft are heavily donating to Democratic candidate Kamala Harris, while some tech billionaires support Republican Donald Trump. This trend highlights a divide in Silicon Valley, with worker…",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/workers-at-several-large-us-tech-companies-overwhelmingly-back-kamala-harris-data-shows/articleshow/113194039.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-113194156,width-1200,height-630,imgsize-1371976,overlay-economictimes/photo.jpg",
            "publishedAt": "2024-09-09T10:50:59Z",
            "content": "Workers at many of the largest U.S. tech companies overwhelmingly back Democratic presidential candidate Kamala Harris, according to donation data, even as some of the most powerful tech billionaires… [+4234 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Aktualne.cz"
            },
            "author": "Jakub Stehlík",
            "title": "Tesla nově nabízí plnou verzi Autopilota. V Česku stojí balík, za eura vyjde levněji",
            "description": "V konfigurátoru Tesly se nově objevila možnost připlatit si za \"schopnost plně autonomního řízení\". Plná verze Autopilota konečně dorazila do Evropy.",
            "url": "https://zpravy.aktualne.cz/ekonomika/auto/tesla-nove-nabizi-plnou-verzi-autopilota-v-cesku-stoji-balik/r~383a1fcc6e2411efbeca0cc47ab5f122/",
            "urlToImage": "https://cdn.xsd.cz/original/0753b0674fdf3253bab3862dc0d2ba16.jpg",
            "publishedAt": "2024-09-09T10:49:26Z",
            "content": "Záběry z YouTube, jak si to Tesla šine krajinou, zatímco její řidič odpočívá na zadním sedadle, bude brzy možné pořídit i na evropských silnicích. I pro zdejší uživatele totiž Elon Musk odemkne plnou… [+2407 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Zive.cz"
            },
            "author": "Ondřej Souček, e15.cz",
            "title": "Tesla FSD míří do Evropy. Samořízení má být dostupné v prvním čtvrtletí 2025",
            "description": "Americká automobilka Tesla aktualizovala plány ohledně svého systému samořízení FSD. Podle nově zveřejněného cíle ho chce podle serveru CNBC už v příštím roce uvést na evropský a čínský trh. Dosud ho využívala jen v severní Americe.\n\nSystém Tesly pojmenovaný …",
            "url": "https://www.zive.cz/clanky/tesla-fsd-miri-do-evropy-samorizeni-ma-byt-dostupne-v-prvnim-ctvrtleti-2025/sc-3-a-230093/default.aspx",
            "urlToImage": "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=436374972",
            "publishedAt": "2024-09-09T10:45:00Z",
            "content": "Americká automobilka Tesla aktualizovala plány ohledn svého systému samoízení FSD. Podle nov zveejnného cíle ho chce podle serveru CNBC u v pítím roce uvést na evropský a ínský trh. Dosud ho vyuívala… [+2295 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Ixbt.com"
            },
            "author": "jin@ixbt.com (Jin)",
            "title": "Продажи новых автомобилей в Поднебесной падают пятый месяц подряд. Названы самые продаваемые модели",
            "description": "Продажи легковых автомобилей в Китае в августе продолжили сокращаться — вот уже пятый месяц подряд, согласно данным Китайской ассоциации легковых автомобилей. Местный регулятор подсчитал, что в августе продажи легковых автомобилей в Поднебесной упали на 1,1% …",
            "url": "https://www.ixbt.com/news/2024/09/09/prodazhi-novyh-avtomobilej-v-podnebesnoj-padajut-pjatyj-mesjac-podrjad-nazvany-samye-prodavaemye-modeli.html",
            "urlToImage": "https://www.ixbt.com/img/n1/news/2024/8/1/Снимок%20экрана%202024-09-09%20133452_large.jpg",
            "publishedAt": "2024-09-09T10:42:00Z",
            "content": "— , .\r\n , 1,1% 1,92 . 3,1%.\r\n   BYD Qin Plus 241 372 . Tesla Model Y, 207 817 , BYD Song Plus 178 278 ."
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Roblox ska dela med sig mer av intäkter till skapare",
            "description": "Kommer även bli möjligt att starta e-handel i Roblox\n\n\n\n\n\n\n\n\n\n\n\n\nI fredags arrangerade Roblox sin årliga Roblox Developers Conference (RDC) och då avslöjade man lite om sina framtida mål och planer. Under konferensen uppgav man bland annat att man siktade på …",
            "url": "https://feber.se/spel/roblox-ska-dela-med-sig-mer-av-intakter-till-skapare/471565/",
            "urlToImage": "https://static.feber.se/article_images/59/81/51/598151.jpg",
            "publishedAt": "2024-09-09T10:40:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+24301 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Elon Musk Says Report xAI Has Discussed Sharing Tesla Revenue 'Not Accurate'",
            "description": "Elon Musk Says Report xAI Has Discussed Sharing Tesla Revenue 'Not Accurate' Investor's Business Daily\nExclusive | Musk’s xAI Has Discussed Deal for Share of Future Tesla Revenue The Wall Street Journal\nElon Musk’s xAI startup could help Tesla with FSD, Optim…",
            "url": "https://biztoc.com/x/4edf88e93622b0c0",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-09T10:37:40Z",
            "content": "Elon Musk Says Report xAI Has Discussed Sharing Tesla Revenue 'Not Accurate' Investor's Business DailyExclusive | Musks xAI Has Discussed Deal for Share of Future Tesla Revenue The Wall Street Journa… [+134 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Elon Musk is on track to become the world's first trillionaire by 2027, report says",
            "description": "Elon Musk endorsed Trump in July.\nSteve Granitz/FilmMagic via Getty Images\nElon Musk is projected to become a trillionaire by 2027, per Informa Connect Academy.\nThe report's predictions are based on an individual's annual wealth growth rate.\nMusk's wealth, wh…",
            "url": "https://biztoc.com/x/94495625812f9694",
            "urlToImage": "https://biztoc.com/cdn/94495625812f9694_s.webp",
            "publishedAt": "2024-09-09T10:37:14Z",
            "content": "Elon Musk endorsed Trump in July.Steve Granitz/FilmMagic via Getty ImagesElon Musk is projected to become a trillionaire by 2027, per Informa Connect Academy.The report's predictions are based on an … [+138 chars]"
        }, {
            "source": {
                "id": "focus",
                "name": "Focus"
            },
            "author": "FOCUS online",
            "title": "Fahrbericht Tesla Cybertruck All-Wheel Drive - Mit dem 5,70 Meter langen Endzeitauto durch die Everglades",
            "description": "Kommt er nach Europa oder nicht? Über kein Auto wird seit Jahren mehr diskutiert als über den Tesla Cybertruck. Wir haben mit dem elektrischen Endzeit-Geländewagen eine Tour durch die Everglades gemacht und wissen immer noch nicht, was wir von dem Pickup halt…",
            "url": "https://www.focus.de/auto/fahrberichte/erster-fahrbericht-erster_id_260295934.html",
            "urlToImage": "https://p6.focus.de/img/fotos/id_260295886/tesla-cybertruck-awd-von-b-filser-2.jpg?im=Crop%3D%280%2C107%2C1600%2C800%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=da9a72de012ed1576d8e3833af126ca013e8732ea0278dd63a21616b0807009f",
            "publishedAt": "2024-09-09T10:36:57Z",
            "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+7426 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Saurav Mukherjee",
            "title": "Elon Musk to become world's first trillionaire by 2027, THIS Indian billionaire to follow suit",
            "description": "According to the Bloomberg Billionaires Index, Tesla's founder is currently the world's richest person, with a net worth of $237 billion.",
            "url": "https://www.livemint.com/companies/people/elon-musk-to-become-worlds-first-trillionaire-by-2027-this-indian-billionaire-to-follow-suit-gautam-adani-11725876745365.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/09/09/1600x900/Elon_Musk__1725877090340_1725877090616.JPG",
            "publishedAt": "2024-09-09T10:31:07Z",
            "content": "Tesla founder and social media 'X' Chief Executive Elon Musk is on the way to becoming the world's first trillionaire by 2027, Hindustan Times quoted an Informa Connect Academy report as saying, addi… [+1938 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Finofilipino.org"
            },
            "author": "Fino",
            "title": "“La camioneta perfecta para madres”: Un concesionario de Toyota en Misisipi “contraprograma” un vídeo a favor de la Tesla Cybertruck.",
            "description": "This Toyota dealership just bodied the cyber truck pic.twitter.com/oyzYxHGInF — Steven Housing Abundance (@stevevance) September 6, 2024 [Ver vídeo en X]\nVer post completo: “La camioneta perfecta para madres”: Un concesionario de Toyota en Misisipi “contrapro…",
            "url": "https://finofilipino.org/la-camioneta-perfecta-para-madres-un-concesionario-de-toyota-en-misisipi-contraprograma-un-video-a-favor-de-la-tesla-cybertruck/",
            "urlToImage": "https://finofilipino.org/wp-content/uploads/2024/09/rdehtfryutkytu.jpg",
            "publishedAt": "2024-09-09T10:30:01Z",
            "content": "Gonzalo Bernardos estalla contra un estudiante: \"¿¡Que crees que hemos hecho lo que tenemos 50 y 60 años!?¡¿Nos han regalado la vivienda?!\". \" El esfuerzo también os está fallando\" #XplicaBatallapic.… [+1249 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Fark.com"
            },
            "author": null,
            "title": "In case you still don't think wealth inequality is out of whack, Elon Musk is poised to become the world's first trillionaire by 2027 [Scary]",
            "description": "In case you still don't think wealth inequality is out of whack, Elon Musk is poised to become the world's first trillionaire by 2027",
            "url": "https://www.fark.com/comments/13386366/In-case-you-still-dont-think-wealth-inequality-is-out-of-whack-Elon-Musk-is-poised-to-become-worlds-first-trillionaire-by-2027",
            "urlToImage": "https://usrimg-full.fark.net/d/dj/fark_djDrQz0xJ-sdpn7CR3tIaRq_w5o.jpg?AWSAccessKeyId=JO3ELGV4BGLFW7Y3EZXN&Expires=1726459200&Signature=3NxjGg5NZGfEV035TwMjF0Em%2B1A%3D",
            "publishedAt": "2024-09-09T10:30:00Z",
            "content": "Jesus McSordid:I don't see it. SpaceX makes money, but Phony Stark has totally destroyed Tesla's value, and Twitter's as well. He won't be getting the $56bn annual payout from Tesla, thank God. I thi… [+158 chars]"
        }, {
            "source": {
                "id": "financial-post",
                "name": "Financial Post"
            },
            "author": "Bloomberg News",
            "title": "How Trump Could Turn a $400 Billion Green Bank Into a Fossil Fuel Lender",
            "description": "The program that helped Tesla become a powerhouse has grown under President Joe Biden. But it risks languishing — or shifting gears altogether — if Donald Trump regains the White House.",
            "url": "https://financialpost.com/pmn/business-pmn/how-trump-could-turn-a-400-billion-green-bank-into-a-fossil-fuel-lender",
            "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/09/776194496.jpg",
            "publishedAt": "2024-09-09T10:28:24Z",
            "content": "The program that helped Tesla become a powerhouse has grown under President Joe Biden. But it risks languishing or shifting gears altogether  if Donald Trump regains the White House.\r\nAuthor of the a… [+10677 chars]"
        }, {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Beatrice Nolan",
            "title": "Elon Musk is on track to become the world's first trillionaire by 2027, report says",
            "description": "Musk's wealth, which is closely tied to his Tesla stake, has fluctuated over the past few years.",
            "url": "https://www.businessinsider.com/elon-musk-trillionaire-first-2027-tesla-wealth-money-2024-9",
            "urlToImage": "https://i.insider.com/66dec47083b8099cf9fcaa34?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T10:26:40Z",
            "content": "Elon Musk endorsed Trump in July.Steve Granitz/FilmMagic via Getty Images\r\n<ul><li>Elon Musk is projected to become a trillionaire by 2027, per Informa Connect Academy.</li><li>The report's predictio… [+2124 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "news.google.com",
            "title": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production",
            "description": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production Yahoo Finance\nJapan invests $2.4 billion in subsidies to boost EV battery production CBT Automotive News\nTesla supplier Panasonic ready to make larger 4680 EV batteries Nikkei As…",
            "url": "https://biztoc.com/x/b2e2b3586472f6e5",
            "urlToImage": "https://biztoc.com/cdn/800/og.png",
            "publishedAt": "2024-09-09T10:26:22Z",
            "content": "Tesla-supplier Panasonic Energy prepares for high-capacity EV battery production Yahoo FinanceJapan invests $2.4 billion in subsidies to boost EV battery production CBT Automotive NewsTesla supplier … [+131 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Bobby Green",
            "title": "Chris Harris pratar om olyckan som stoppade Top Gear",
            "description": "Säkerheten var för dålig\n\n\n\n\n\n\n\n\n\n\nI slutet av 2022 skadades Top Gears presentatör Andrew \"Freddie\" Flintoff när de spelade in ett inslag med en Morgan 3 Wheeler. Det är en öppen bil, och av någon anledning lyckades Freddie volta med den och eftersom han inte…",
            "url": "https://feber.se/video/chris-harris-pratar-om-olyckan-som-stoppade-top-gear/471566/",
            "urlToImage": "https://i.ytimg.com/vi/CYFD2sLFAv0/hqdefault.jpg",
            "publishedAt": "2024-09-09T10:20:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+18994 chars]"
        }, {
            "source": {
                "id": null,
                "name": "redmondpie.com"
            },
            "author": "Taimur Asad",
            "title": "Tesla Wireless Charging For EVs Revealed In New Patent Filing",
            "description": "In a new patent filing from Tesla, the company's wireless charging station has been revealed.\nThe post Tesla Wireless Charging For EVs Revealed In New Patent Filing first appeared on Redmond Pie.",
            "url": "https://www.redmondpie.com/tesla-wireless-charging-for-evs-revealed-in-new-patent-filing/",
            "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2024/02/tesla-yoke.jpg",
            "publishedAt": "2024-09-09T10:15:02Z",
            "content": "In a new patent filing from Tesla, the company’s wireless charging station has been revealed.\r\nCouple of years back, Tesla acquired an EV wireless charging startup to bring this tech to its cars.\r\nWh… [+1803 chars]"
        }, {
            "source": {
                "id": null,
                "name": "ETF Daily News"
            },
            "author": "MarketBeat News",
            "title": "1,818 Shares in Tesla, Inc. (NASDAQ:TSLA) Purchased by MainStreet Investment Advisors LLC",
            "description": "MainStreet Investment Advisors LLC acquired a new position in Tesla, Inc. (NASDAQ:TSLA – Free Report) in the 2nd quarter, according to its most recent filing with the Securities and Exchange Commission. The firm acquired 1,818 shares of the electric vehicle p…",
            "url": "https://www.etfdailynews.com/2024/09/09/1818-shares-in-tesla-inc-nasdaqtsla-purchased-by-mainstreet-investment-advisors-llc/",
            "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
            "publishedAt": "2024-09-09T10:12:55Z",
            "content": "MainStreet Investment Advisors LLC acquired a new position in Tesla, Inc. (NASDAQ:TSLA – Free Report) in the 2nd quarter, according to its most recent filing with the Securities and Exchange Commissi… [+4795 chars]"
        }, {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Workers at several large US tech companies overwhelmingly back Kamala Harris, data shows",
            "description": "NEW YORK : Workers at many of the largest U.S. tech companies overwhelmingly back Democratic presidential candidate Kamala Harris, according to donation data, even as some of the most powerful tech billionaires have thrown their support to Republican rival Do…",
            "url": "https://www.channelnewsasia.com/business/workers-several-large-us-tech-companies-overwhelmingly-back-kamala-harris-data-shows-4595926",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--wkKub8Sf--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2024-09-09t101108z_1_lynxmpek880ah_rtroptp_3_usa-election-tech.jpg?itok=ljPVeTwa",
            "publishedAt": "2024-09-09T10:11:08Z",
            "content": "NEW YORK : Workers at many of the largest U.S. tech companies overwhelmingly back Democratic presidential candidate Kamala Harris, according to donation data, even as some of the most powerful tech b… [+4179 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Securityaffairs.com"
            },
            "author": "Pierluigi Paganini",
            "title": "TIDRONE APT targets drone manufacturers in Taiwan",
            "description": "A previously undocumented threat actor tracked TIDRONE targets organizations in military and satellite industries in Taiwan. Trend Micro spotted an allegedly China-linked threat actor, tracked TIDRONE, targeting drone manufacturers in Taiwan. The group, which…",
            "url": "https://securityaffairs.com/168210/apt/tidrone-targets-organizations-taiwan.html",
            "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/09/image-8.png",
            "publishedAt": "2024-09-09T10:10:24Z",
            "content": "TIDRONE APT targets drone manufacturers in Taiwan\r\n | Multiple malware families delivered exploiting GeoServer GeoTools flaw CVE-2024-36401\r\n | Progress Software fixed a maximum severity flaw in Load… [+98498 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Elon Musk Shoots Down Reports Of Tesla's China Woes Amid Intense Competition, Says Giga Shanghai Is 'Running At Max Capacity'",
            "description": "Tesla Inc (NASDAQ:TSLA) CEO Elon Musk on Sunday denied reports of his EV company struggling in China amid increasing competition from domestic automakers and an intense price war.\nWhat Happened: “Our Shanghai factory is running at max capacity,” Musk wrote on…",
            "url": "https://biztoc.com/x/14ee978b1c72a5fe",
            "urlToImage": "https://biztoc.com/cdn/14ee978b1c72a5fe_s.webp",
            "publishedAt": "2024-09-09T10:04:16Z",
            "content": "Tesla Inc (NASDAQ:TSLA) CEO Elon Musk on Sunday denied reports of his EV company struggling in China amid increasing competition from domestic automakers and an intense price war.What Happened: Our S… [+136 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Daily Geek Show"
            },
            "author": "contact@dailygeekshow.com (DGS)",
            "title": "Le robot ultraréaliste de cette entreprise chinoise était en réalité une femme déguisée",
            "description": "Depuis quelques années, les fabricants de robots sont en perpétuelle compétition pour développer les meilleurs robots à l’image de l’être humain. A l’occasion de la huitième édition de la World Robot Conference, une entreprise chinoise a présenté deux robots …",
            "url": "https://dailygeekshow.com/robot-chine-femme/",
            "urlToImage": "https://dailygeekshow.com/wp-content/uploads/2024/09/une-chine-robots.jpg",
            "publishedAt": "2024-09-09T10:00:00Z",
            "content": "Depuis quelques années, les fabricants de robots sont en perpétuelle compétition pour développer les meilleurs robots à limage de lêtre humain. À loccasion de la huitième édition de la World Robot Co… [+1818 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "Withings lanserar ScanWatch Nova Brilliant Edition",
            "description": "För den som gillar klockor med långa namn\n\n\n\n\n\n\nWithings har länge erbjudit klockor för den som vill ha en aningen smartare klocka utan att det faktiskt ser ut som en liten dator på handleden. Med nya ScanWatch Nova Brilliant fortsätter man att släppa klockor…",
            "url": "https://feber.se/mobil/withings-lanserar-scanwatch-nova-brilliant-edition/471564/",
            "urlToImage": "https://static.feber.se/article_images/59/81/50/598150.jpg",
            "publishedAt": "2024-09-09T10:00:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+19042 chars]"
        }, {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Research and Markets",
            "title": "US Embedded Finance Business Report 2024: Revenues will Increase from $30.82 Billion in 2024 to Reach $89.59 Billion by 2029 - 75+ KPIs on Embedded Lending, Insurance, Payment, and Wealth Segments",
            "description": "Dublin, Sept. 09, 2024 (GLOBE NEWSWIRE) -- The \"United States Embedded Finance Business and Investment Opportunities Databook - 75+ KPIs on Embedded Lending, Insurance, Payment, and Wealth Segments - Q2 2024 Update\" report has been added to ResearchAndMarkets…",
            "url": "https://www.globenewswire.com/news-release/2024/09/09/2942622/28124/en/US-Embedded-Finance-Business-Report-2024-Revenues-will-Increase-from-30-82-Billion-in-2024-to-Reach-89-59-Billion-by-2029-75-KPIs-on-Embedded-Lending-Insurance-Payment-and-Wealth-S.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
            "publishedAt": "2024-09-09T10:00:00Z",
            "content": "Dublin, Sept. 09, 2024 (GLOBE NEWSWIRE) -- The \"United States Embedded Finance Business and Investment Opportunities Databook - 75+ KPIs on Embedded Lending, Insurance, Payment, and Wealth Segments -… [+12820 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Vanity Fair"
            },
            "author": "Kate Conger and Ryan Mac",
            "title": "“Are You Saying No to Elon Musk?”: Scenes from the Slash-and-Burn Buyout of Twitter",
            "description": "In an excerpt from their new book, ‘Character Limit,’ Kate Conger and Ryan Mac detail how Musk’s “goons” instilled fear and uncertainty among the rank and file, while his inner circle employed hardball tactics in a touch-and-go transaction.",
            "url": "https://www.vanityfair.com/news/story/elon-musk-twitter-buyout",
            "urlToImage": "https://media.vanityfair.com/photos/66db3dce459feea2766b658e/16:9/w_1280,c_limit/Elon-Musk-Twitter-Sale.jpg",
            "publishedAt": "2024-09-09T10:00:00Z",
            "content": "At around 9:00 a.m. on October 27, 2022, Parag Agrawal, the CEO of Twitter, summoned his leadership team into one of the large glass-doored conference rooms that lined the suite of offices on the sev… [+6257 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "Алексей Сычёв",
            "title": "Илон Маск заявил, что Tesla не требуется лицензировать что-либо у xAI",
            "description": "Видимо, всё достаётся бесплатно.",
            "url": "https://overclockers.ru/softnews/show/136443/ilon-mask-zayavil-chto-tesla-ne-trebuetsya-licenzirovat-chto-libo-u-xai",
            "urlToImage": "https://overclockers.ru/st/images/preview/kxX4t8vS4u3UDNlB.jpg",
            "publishedAt": "2024-09-09T09:51:00Z",
            "content": "The Wall Street Journal , (Elon Musk), Reuters, X , Tesla, .\r\n , Tesla xAI, FSD, . , Tesla xAI. The Wall Street Journal ."
        }, {
            "source": {
                "id": null,
                "name": "Epravda.com.ua"
            },
            "author": "Економічна правда",
            "title": "Продажі авто в Китаї падаю п’ятий місяць поспіль",
            "description": "Продажі автомобілів в Китаї в серпні впали п’ятий місяць поспіль, хоча продажі електромобілів та гібридів зросли і зайняли рекордну частку ринку.",
            "url": "https://www.epravda.com.ua/news/2024/09/9/719074/",
            "urlToImage": "https://eimg.pravda.com/images/doc/7/1/719074_fb_image_ukr_2024_09_09_12_49_07.png",
            "publishedAt": "2024-09-09T09:44:00Z",
            "content": "’ , .\r\n Reuters .\r\n , 1,1% 1,92 . 3,1% .\r\n 43,2% 53,5% , BYD, , Tesla, 2024 .\r\n, 24% 20% .\r\n 2 823 , , , 2113 .\r\n, , , , .\r\n -, 7,3% .\r\n : 20 : BYD \r\n:\r\n BYD Co. ' Hedin Electric Mobility.\r\n , ."
        }, {
            "source": {
                "id": null,
                "name": "Auto-moto.com"
            },
            "author": "Publi-Rédactionnel",
            "title": "Peugeot E-3008 : un nouveau SUV électrique",
            "description": "Découvrez les avancées remarquables de Peugeot avec le lancement du SUV électrique E-3008, conçu pour l'innovation et la durabilité sur la plateforme STLA-Medium.",
            "url": "https://www.auto-moto.com/suv/peugeot-e-3008-nouveau-suv-electrique-45099",
            "urlToImage": "https://photos.auto-moto.com/32/2024/09/photo_article/45099/162060/1200-L-peugeot-e-3008-un-nouveau-suv-lectrique.webp",
            "publishedAt": "2024-09-09T09:44:00Z",
            "content": "Au cours des six derniers mois, Peugeot a réalisé des avancées remarquables dans l'industrie automobile. La marque se positionne en tant qu'acteur majeur sur le marché des véhicules électriques. L'un… [+4400 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Epravda.com.ua"
            },
            "author": "Экономическая правда",
            "title": "Продажи авто в Китае падают пятый месяц подряд",
            "description": "Продажи автомобилей в Китае в августе упали пятый месяц подряд, хотя продажи электромобилей и гибридов выросли и заняли рекордную долю рынка.",
            "url": "https://www.epravda.com.ua/rus/news/2024/09/9/719074/",
            "urlToImage": "https://eimg.pravda.com/images/doc/7/1/719074_fb_image_rus_2024_09_09_12_49_07.png",
            "publishedAt": "2024-09-09T09:44:00Z",
            "content": ", .\r\n Reuters .\r\n , 1,1% 1,92 . 3,1% .\r\n 43,2% 53,5% , BYD, , Tesla, 2024 .\r\n, 24% 20% .\r\n 2 823 , , , 2113 .\r\n, , , , .\r\n -, 7,3% .\r\n : 20 : BYD \r\n:\r\n BYD Co. Hedin Electric Mobility.\r\n , ."
        }, {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Emily Stewart",
            "title": "The cult of Nvidia is getting really weird",
            "description": "Investors are obsessed with Nvidia thanks to its soaring stock price. The meme feels like GameStop, but there are also some good reasons for the cult.",
            "url": "https://www.businessinsider.com/nvidia-stock-price-earnings-party-investors-cult-investing-memes-2024-9",
            "urlToImage": "https://i.insider.com/66d8b4361d8d2deb96b8ee90?width=1200&format=jpeg",
            "publishedAt": "2024-09-09T09:43:02Z",
            "content": "Everyone could probably stand to chill about Nvidia.Getty Images; Jenny Chang-Rodriguez/BI\r\nI probably do not have to tell you that Nvidia has really blown up over the past few years. The tech compan… [+11652 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Wille Wilhelmsson",
            "title": "Skaparna av Qi visar upp trådlös standard för köket",
            "description": "Ki kan driva de flesta köksmaskiner\n\n\n\n\n\n\n\n\n\n\nWireless Power Consortium (WPC), konsortiet som står bakom den trådlösa laddstandarden Qi, har visat upp något som man kallar för \"Ki\", något som man hoppas kan bli standard för trådlös laddning av köksmaskiner i …",
            "url": "https://feber.se/pryl/skaparna-av-qi-visar-upp-tradlos-standard-for-koket/471567/",
            "urlToImage": "https://i.ytimg.com/vi/GeiKY_Rmxxk/hqdefault.jpg",
            "publishedAt": "2024-09-09T09:40:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+19801 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Inside.com.tw"
            },
            "author": "Sherlock",
            "title": "Skoda Enyaq Coupe RS 試駕：Skoda 在台首款電動車，單純，但不簡單",
            "description": "Skoda Enyaq Coupe RS 稱不上是一輛「性能」、「暴力」的電動車，雖然他已經掛上了 Skoda 品牌中的 RS 性能版本。但歐系車的車體剛性、組裝品質，加上別具跑格的外型與會發光的 Crystai Face 水箱護罩，已經讓這輛不到 200 萬的純歐系電動車 CP 值拉滿了。",
            "url": "https://www.inside.com.tw/article/36160-skoda-enyaq-coupe-rs-test-drive",
            "urlToImage": "https://bucket-image.inkmaginecms.com/version/social/1/image/2024/09/1f707bfb-f555-44e2-8f17-7bdab8975cac.jpg",
            "publishedAt": "2024-09-09T09:38:41Z",
            "content": "Skoda  Skoda Enyaq Skoda Skoda Enyaq Coupe RS \r\n Skoda Enyaq  Skoda Enyaq 85Skoda Enyaq Coupe 85 Skoda Enyaq Coupe RS 163.8 171.8  198.8 \r\nPhoto Credit: Skoda\r\nEnyaq VolkswagenMEB LG 12  82kWh WLTP 5… [+1479 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Jake Kanter",
            "title": "Jeremy Clarkson Wound Up “Something Rotten” By Chris Harris’ Claim On Joe Rogan Podcast That ‘Top Gear’ Faked A Scathing Tesla Review",
            "description": "Jeremy Clarkson has denied that Top Gear ever scripted a scathing Tesla review after his successor Chris Harris claimed that the BBC show was “naughty” in its treatment of Elon Musk’s electric car. In his weekly column in The Sun newspaper, Clarkson said he w…",
            "url": "http://deadline.com/2024/09/jeremy-clarkson-chris-harris-top-gear-faked-tesla-review-joe-rogan-1236082201/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2024/09/MixCollage-09-Sep-2024-09-53-AM-7277.jpg?w=1024",
            "publishedAt": "2024-09-09T09:38:22Z",
            "content": "Jeremy Clarkson has denied that Top Gear ever scripted a scathing Tesla review after his successor Chris Harris claimed that the BBC show was “naughty” in its treatment of Elon Musk‘s electric car.\r\n… [+2064 chars]"
        }, {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "Илон Маск опроверг слухи о намерениях xAI претендовать на часть выручки Tesla",
            "description": "Получившие в выходные распространение слухи о намерениях стартапа xAI посягнуть на часть выручки Tesla в обмен на доступ к его технологиям искусственного интеллекта к началу недели удостоились внимания Илона Маска (Elon Musk), который опроверг наличие самой п…",
            "url": "https://3dnews.ru/1110664/ilon-mask-oproverg-sluhi-o-namereniyah-xai-pretendovat-na-chast-viruchki-tesla",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/09/09/1110664/xAI_01.jpg",
            "publishedAt": "2024-09-09T09:36:00Z",
            "content": "xAI Tesla (Elon Musk), .\r\n: xAI\r\n«Tesla xAI, FSD, , - xAI», — X. The Wall Street Journal .\r\n, $5 Tesla xAI. , , ."
        }, {
            "source": {
                "id": null,
                "name": "Autobild.de"
            },
            "author": "Sebastian Geschwill",
            "title": "Auf dem Weg zur Billion: Musks Vermögen könnte Rekordhöhen erreichen",
            "description": "Bis sich Elon Musks Vermögen auf eine Billion US-Dollar beläuft, dauert es womöglich nicht mehr lange. Doch die Konkurrenz ist ihm auf den Fersen.",
            "url": "https://www.autobild.de/artikel/elon-musks-vermoegenswachstum-26436363.html",
            "urlToImage": "https://i.auto-bild.de/ir_img/3/6/6/3/0/5/3/Elon-Musk-koennte-weltweit-erster-Billionaer-werden_16_9-4cb951f602333698.jpg?impolicy=og_images",
            "publishedAt": "2024-09-09T09:25:00Z",
            "content": "Eine 1 mit 12 Nullen oder kurz: eine Billion. Diese Zahl könnte Elon Musk schon bald erblicken, wenn er den Wert seines Eigentums prüft. Das lässt zumindest eine Studie der \"Informa Connect Academy\" … [+1610 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Motor.ru"
            },
            "author": "Мария Руцкая",
            "title": "Tesla работает над беспроводной зарядкой для электрокаров",
            "description": "Tesla работает над беспроводной зарядкой для электрокаров. Патент на технологию обнаружили пользователи соцсетей: он был опубликован Ведомством по патентам и товарным знакам США 6 сентября 2024 года. Система будет состоять из настенного блока и зарядной панел…",
            "url": "https://motor.ru/news/tesla-wireless-09-09-2024.htm",
            "urlToImage": "https://motor.ru/imgs/2024/09/09/07/6587668/b8028ee5107294cc162596830262417367ac952d.png",
            "publishedAt": "2024-09-09T09:21:53Z",
            "content": "Tesla , .   76 .          ,     , 10 , , ,  .\r\n Cybertruck.   , ."
        }, {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "Reuters",
            "title": "Despite rise in exports, Chinese car sales fall for fifth straight month",
            "description": "Sales fell 1.1 per cent from the same month a year earlier to 1.92 million vehicles, data from the China Passenger Car Association showed",
            "url": "https://www.business-standard.com/industry/auto/despite-rise-in-exports-chinese-car-sales-fall-for-fifth-straight-month-124090900562_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/23/thumb/fitandfill/400X400/1724387429-4032.JPG",
            "publishedAt": "2024-09-09T09:21:07Z",
            "content": "Sales fell 1.1 per cent from the same month a year earlier to 1.92 million vehicles, data from the China Passenger Car Association showed\r\nEV champion BYD set a sales record and US rival Tesla had it… [+1893 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Bobby Green",
            "title": "Transportstyrelsen planerar att höja sina avgifter",
            "description": "Körkort och förarbevis blir dyrare\n\n\n\n\n\n\nTransportstyrelsen meddelar nu att de planerar att höja sina avgifter vid årsskiftet. Beslut om detta kommer att fattas nu under hösten och gäller därefter från och med den 1 januari 2025. \n\nNågra av sakerna som kan ko…",
            "url": "https://feber.se/bil/transportstyrelsen-planerar-att-hoja-sina-avgifter/471570/",
            "urlToImage": "https://static.feber.se/article_images/59/81/63/598163.jpg",
            "publishedAt": "2024-09-09T09:20:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+19236 chars]"
        }, {
            "source": {
                "id": "focus",
                "name": "Focus"
            },
            "author": "Von FOCUS-online-Experte Kishor Sridhar",
            "title": "Kommentar von Change-Spezialist Kishor Sridhar - „Effizienz steht nicht für ihn“ - daran würde Trumps neuer Musk-Plan scheitern",
            "description": "Wie könnte eine von Donald Trump geplante Kommission zur Regierungseffizienz, mit Elon Musk an der Spitze, die Arbeitsweise der US-Regierung verändern? Change-Spezialist Kishor Sridhar zeigt auf, wie das aussehen könnte.Von FOCUS-online-Experte Kishor Sridhar",
            "url": "https://www.focus.de/experts/kommentar-von-change-spezialist-kishor-sridhar-effizienz-steht-nicht-fuer-ihn-daran-wuerde-trumps-neuer-musk-plan-scheitern_id_260295255.html",
            "urlToImage": "https://p6.focus.de/img/fotos/id_260295254/gettyimages-2162688821.jpg?im=Crop%3D%280%2C160%2C1024%2C512%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=d453975a07ec1d8dc759d4e0e67df89dae4575dc22038b7d0a5069d52957b755",
            "publishedAt": "2024-09-09T09:15:04Z",
            "content": "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+9250 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "Nisha Anand",
            "title": "Elon Musk to turn trillionaire by 2027, Gautam Adani next in queue: Report",
            "description": "Elon Musk, with a current wealth of $237 billion and a growth rate of 110% annually, could become the world's first trillionaire by 2027, a new report has revealed",
            "url": "https://www.business-standard.com/world-news/elon-musk-to-turn-trillionaire-by-2027-gautam-adani-next-in-queue-report-124090900487_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/31/thumb/fitandfill/400X400/1725088301-5798.jpg",
            "publishedAt": "2024-09-09T09:14:14Z",
            "content": "Elon Musk, with a current wealth of $237 billion and a growth rate of 110% annually, could become the world's first trillionaire by 2027, a new report has revealed\r\nTesla CEO Elon Musk.\r\nNisha AnandN… [+1806 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Marie Lizak",
            "title": "Toyota pourrait enfin rattraper son retard sur la voiture électrique avec cette batterie révolutionnaire",
            "description": "Encore un peu à la traîne sur la voiture électrique, Toyota compte bien mettre les bouchées doubles pour combler son retard. Et pour cela, la firme japonaise va produire sa toute première batterie solide à partir de 2026. Le projet vient tout juste d’être app…",
            "url": "https://www.frandroid.com/marques/2330266_toyota-pourrait-enfin-rattraper-son-retard-sur-la-voiture-electrique-avec-cette-batterie-revolutionnaire",
            "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/09/toyota-8500-1200x800-1.jpeg",
            "publishedAt": "2024-09-09T09:08:47Z",
            "content": "Encore un peu à la traîne sur la voiture électrique, Toyota compte bien mettre les bouchées doubles pour combler son retard. Et pour cela, la firme japonaise va produire sa toute première batterie so… [+4070 chars]"
        }, {
            "source": {
                "id": null,
                "name": "COMPUTER BILD"
            },
            "author": "Sebastian Geschwill",
            "title": "Vermögensanalyse: Elon Musk bis 2027 weltweit erster Billionär?",
            "description": "Bis sich Elon Musks Vermögen auf eine Billion US-Dollar beläuft, dauert es womöglich nicht mehr lange. Doch die Konkurrenz ist ihm auf den Fersen.",
            "url": "https://www.computerbild.de/artikel/cb-News-Internet-Vermoegensanalyse-Elon-Musk-bis-2027-weltweit-erster-Billionaer-38905099.html",
            "urlToImage": "https://i.computer-bild.de/imgs/1/5/4/1/4/6/0/5/Elon-Musk-ko__nnte-weltweit-erster-Billiona__r-werden-92236e58c32725ca.jpg",
            "publishedAt": "2024-09-09T09:04:00Z",
            "content": "Auf Rekordjagd\r\nBis sich Elon Musks Vermögen auf eine Billion US-Dollar beläuft, dauert es womöglich nicht mehr lange. Doch die Konkurrenz ist ihm auf den Fersen.\r\nEine 1 mit 12 Nullen oder kurz: ein… [+1801 chars]"
        }, {
            "source": {
                "id": null,
                "name": "PC Games"
            },
            "author": "Maik Koch",
            "title": "Star Trucker: Energiezellen aufladen im Weltraum-Trucksimulator - geht das?",
            "description": "In Star Trucker Energiezellen aufladen? Die Batterien im Weltraum-Truck-Simulator sind schnell leer. Doch kann man sie überhaupt aufladen?",
            "url": "https://www.pcgames.de/Star-Trucker-Spiel-74902/Tipps/Energiezellen-aufladen-Ladestation-Truck-Simulator-1455356/",
            "urlToImage": "https://www.pcgames.de/screenshots/original/2024/09/Star-Trucker-Screenshot-06-pc-games_artwork.jpg",
            "publishedAt": "2024-09-09T09:02:00Z",
            "content": "Leere Energiezellen aufladen in Star Trucker: Geht das überhaupt? Bereits nach wenigen Kilometern auf den Weltraum-Highways stellt ihr fest, dass die Schwerkraft plötzlich ausfällt. Hier sei gesagt: … [+2429 chars]"
        }, {
            "source": {
                "id": null,
                "name": "Feber.se"
            },
            "author": "Hugo Engström",
            "title": "Ultimate Ears lanserar minstingen Miniroll",
            "description": "För 900 kronor\n\n\n\n\n\n\nLogitech-märket Ultimate Ears lanserar idag den lilla högtalaren. Miniroll, som är designad för att följa med dig överallt. Den har bland annat en inbyggd silikonrem så du kan fästa den på exempelvis din cykel, båt eller väska. Den är ock…",
            "url": "https://feber.se/pryl/ultimate-ears-lanserar-minstingen-miniroll/471561/",
            "urlToImage": "https://static.feber.se/article_images/59/81/48/598148.jpg",
            "publishedAt": "2024-09-09T09:00:00Z",
            "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+18763 chars]"
        }];
    constructor () {
        super();
        console.log("News Component");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div>
            <h3>This is News Component.</h3>
            <div className="row mt-5">
                <div className="col-md-4">
                    <NewsItem title="My Title 1" description="Hello World" url="https://itc.ua/wp-content/uploads/2024/09/IMG_9229.jpg"/>                
                </div>
                <div className="col-md-4">
                    <NewsItem title="My Title 2" description="Hello World" url="https://www.investors.com/wp-content/uploads/2021/09/Stock-wallstreetflag-01-adobe.jpg"/>                
                </div>
                <div className="col-md-4">
                    <NewsItem title="My Title 3" description="Hello World" url="https://nypost.com/wp-content/uploads/sites/2/2024/09/89318575.jpg?quality=75&strip=all&w=1024"/>                
                </div>    
            </div>
      </div>
    )
  }
}
