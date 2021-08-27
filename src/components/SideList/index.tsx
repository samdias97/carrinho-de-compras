import { useEffect, useState, useCallback, useRef } from 'react';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Product } from '../../interfaces';
import { CardProduct } from '../CardProduct';

import { Container, List, ButtonArrow } from './styles';
 
interface SideListProps {
  data: Product[];
}

export const SideList: React.FC<SideListProps> = ({
  data,
}) => {
  const refListCards = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [cardWidthOnScreen, setCardWidthOnScreen] = useState<number>(0);
  const [listWidthOnScreen, setListWidthOnScreen] = useState<number>(0);
  const [nextCard, setNextCard] = useState<number>(0);
  const [previousCard, setPreviousCard] = useState<number>(0);

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth);
  });

  useEffect(() => {
    if (refListCards.current && refListCards.current.children[0]) {
      let cardWidthOnScreenAux = refListCards.current.children[0].clientWidth;
      let listWidthOnScreenAux = refListCards.current.clientWidth;

      //refListCards.current.children[0].scrollIntoView();
      setNextCard(Math.floor(listWidthOnScreenAux /cardWidthOnScreenAux));
      setCardWidthOnScreen(cardWidthOnScreenAux);
      setListWidthOnScreen(listWidthOnScreenAux);
    }
  }, [data, screenWidth])

  const handlePreviousCard = useCallback(() => {
    if (refListCards.current && listWidthOnScreen && cardWidthOnScreen && previousCard >= 0) {
      setPreviousCard(previousCard - 1);
      setNextCard(previousCard + Math.floor(listWidthOnScreen / cardWidthOnScreen));
      refListCards.current.children[previousCard].scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [cardWidthOnScreen, listWidthOnScreen, previousCard]);

  const handleNextCard = useCallback(() => {
    if (refListCards.current && listWidthOnScreen && cardWidthOnScreen && data.length - 1 > nextCard) {
      setNextCard(nextCard + 1);
      setPreviousCard(nextCard - Math.floor(listWidthOnScreen / cardWidthOnScreen));
      refListCards.current.children[nextCard].scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [cardWidthOnScreen, data.length, listWidthOnScreen, nextCard]);

  return (
    <Container>
      <ButtonArrow type="button" direction='left' onClick={handlePreviousCard}>
        <RiArrowLeftSLine />
      </ButtonArrow>

      <List ref={refListCards}>
        {data.map(product => (
          <CardProduct 
            key={product.id}
            data={product}
          />
        ))} 
      </List>
      
      <ButtonArrow type="button" direction='right' onClick={handleNextCard}>
        <RiArrowRightSLine />
      </ButtonArrow>
    </Container>
  );
}