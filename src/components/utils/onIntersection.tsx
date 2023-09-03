export interface IOnIntersection {
  element: HTMLElement;
  visibleCallback: () => void;
  hiddenCallback: () => void;
  threshold?: number;
  rootMargin?: string;
}

/**
 * @see https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */
const onIntersection = ({
  element,
  visibleCallback,
  hiddenCallback,
  threshold,
  rootMargin,
}: IOnIntersection): any => {
  const options = {
    root: null,
    rootMargin: rootMargin ?? "0px",
    threshold: threshold ?? 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleCallback();
      } else {
        hiddenCallback();
      }
    });
  }, options);

  observer.observe(element);
};

export default onIntersection;
