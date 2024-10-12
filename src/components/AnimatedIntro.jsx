import { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";

export const AnimatedIntro = () => {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  useEffect(() => {
    const options = {
      typeSpeed: 30,
      backSpeed: 0,
      showCursor: false,
    };

    const removeCursor = (self) => {
      if (self && self.cursor) {
        self.cursor.remove();
      }
    };

    const startNextTyped = (nextTyped) => {
      setTimeout(() => nextTyped.start(), 500); // 500ms delay between animations
    };

    const typed1 = new Typed(el1.current, {
      ...options,
      strings: ["Hi, my name's Sehun!"],
      onComplete: (self) => {
        removeCursor(self);
        startNextTyped(typed2);
      },
    });

    const typed2 = new Typed(el2.current, {
      ...options,
      strings: ["I'm a Front-End Developer."],
      onComplete: (self) => {
        removeCursor(self);
        startNextTyped(typed3);
      },
    });

    const typed3 = new Typed(el3.current, {
      ...options,
      strings: ["Self-taught via The Odin Project."],
      onComplete: (self) => {
        removeCursor(self);
        startNextTyped(typed4);
      },
    });

    const typed4 = new Typed(el4.current, {
      ...options,
      strings: ["Check out my works!"],
      onComplete: (self) => {
        removeCursor(self);
      },
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
      typed4.destroy();
    };
  }, []);

  return (
    <IntroContainer>
      <MainIntroText ref={el1} />
      <SubIntroText ref={el2} />
      <SubIntroText ref={el3} />
      <SubIntroText ref={el4} />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem 0;
`;

const MainIntroText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  min-height: 2.5rem;
  margin-bottom: 0.75rem;
`;

const SubIntroText = styled.div`
  font-size: 1.25rem;
  font-weight: normal;
  color: var(--text-color);
  min-height: 1.75rem;
  margin-bottom: 0.5rem;
`;
