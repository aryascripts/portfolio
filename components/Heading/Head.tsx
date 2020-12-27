import { LegacyRef, useEffect, useRef, useState } from "react";
import styles from "./Head.module.scss";

interface HeaderProps {
  name: string;
  title: string;
}
const MAX_R = 300;

const Head: React.FC<HeaderProps> = (props) => {
  const canvas = useRef<HTMLCanvasElement>();
  const [viewPx, setViewPx] = useState<{ vw: number; vh: number }>({
    vw: 0,
    vh: 0,
  });
  const [sizes, setSizes] = useState({ cx: 0, cy: 0 });
  const [rings, setRings] = useState<{ r: number }[]>([
    { r: 0 },
    { r: 125 },
    { r: 200 },
  ]);

  const updateCanvas = () => {
    const context = canvas.current?.getContext("2d");
    const { vw, vh } = viewPx;
    context.clearRect(0, 0, vw, vh);

    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];

      context.globalAlpha = 1 - ++ring.r / MAX_R;

      if (ring.r > MAX_R) ring.r = 0;
      context.beginPath();
      context.arc(sizes.cx, sizes.cy, ++ring.r, 0, Math.PI * 2);
      context.stroke();
    }

    window.requestAnimationFrame(updateCanvas.bind(this));
  };

  function handleResize() {
    const vw = document.scrollingElement.clientWidth;
    const vh = canvas.current?.height;
    setViewPx({ vw, vh });

    setCanvasWidth(vw);

    const cx = vw / 2;
    const cy = vh / 2 - 25;

    setSizes({ cx, cy });

    const context = canvas.current?.getContext("2d");
    context.strokeStyle = "rgba(255, 255, 255, 0.20)";
    context.lineWidth = 30;
  }

  useEffect(() => {
    const context = canvas.current?.getContext("2d");

    const vw = document.scrollingElement.clientWidth;
    const vh = canvas.current?.height;
    const cx = vw / 2;
    const cy = vh / 2 - 25;
    setSizes({ cx, cy });

    setCanvasWidth(vw);

    context.strokeStyle = "rgba(255, 255, 255, 0.20)";
    context.lineWidth = 30;

    window.requestAnimationFrame(updateCanvas);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvas.current]);

  const setCanvasWidth = (n: number) => {
    if (canvas.current) canvas.current.width = n;
  };

  return (
    <div className={styles["head-section"]}>
      <canvas ref={canvas} height="800"></canvas>

      <div className={styles["pic-info"]}>
        <div className={styles["circle-border"]}>
          <div className="circle-background"></div>
        </div>

        <div className={styles["name"]}>{props.name}</div>
        <div className={styles["title"]}>{props.title}</div>
      </div>

      {/* <Quotes class="quotes" /> */}

      <svg
        className="arrow"
        version="1.1"
        baseProfile="full"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <polyline stroke-linejoin="miter" points="4,12 20,28 36,12" />
      </svg>
    </div>
  );
};

export default Head;
