import { firebaseDatabase } from './firebase';

class CardRepository {

    syncCards(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`)
        ref.on('value', (snapshot) => { //on은 db가 업데이트 될 때마다 콜백함수가 호출 됨.
            const value = snapshot.val(); //value는 db안에있는 카드들의 정보가 될 것임.
            value && onUpdate(value);
        });

        return () => ref.off();
    }

    saveCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }

}

export default CardRepository;