let cards = [];
        let sum = 0;
        let hasBlackjack = false;
        let isAlive = false;
        let message = "";
        let messageEl = document.getElementById("message-el");
        // let sumEl = document.querySelector("#sum-el");
        let sumEl = document.getElementById("sum-el");
        let cardsEl = document.getElementById("cards-el");


        let player = {
            name: "Gyan",
            ammount: 20000
        }

        let playerEl = document.getElementById("player-el");
        playerEl.textContent = player.name + ": $" + player.ammount;

        function getRandomCard() {
            let randomNum = Math.floor(Math.random() * 13) + 1; 
            if (randomNum === 1) {
                return 11;
            } else if (randomNum > 10) {
                return 10;
            } else {
                return randomNum;
            }
        }

        function startGame() {
            isAlive = true;
            let firstCard = getRandomCard();
            let secondCard = getRandomCard();
            cards = [firstCard, secondCard];
            sum = firstCard + secondCard;
            renderGame()
        }

        function renderGame() {
            cardsEl.textContent = "Cards: ";
            for (let i = 0; i < cards.length; i++) {
                cardsEl.textContent += cards[i] + " ";
            }
            
            cardsEl.textContent = "Cards: ";
            for (let i = 0; i < cards.length; i++) {
                cardsEl.textContent += cards[i] + " ";
            }


            sumEl.textContent = "Sum: " + sum;
            if (sum <= 20) {
                message = "Do you want  to draw a new card?";
            } else if (sum === 21) {
                message = "You've got Blackjack!";
            } else {
                message = "You're out of the game!";
                isAlive = false;
            }

            messageEl.textContent = message;
        }

        function newCard() {
            if (isAlive === true && hasBlackjack === false) {
                let card = getRandomCard();
                sum += card;
                cards.push(card);
                renderGame()
            }
        }