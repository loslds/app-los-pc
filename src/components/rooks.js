
export function useIsMounted() {
  const isMounted = React.useRef();

  React.useEffect(()=>{
    return () => {
      isMounted.current = false;
    }
  },[]);
  return isMounted;
}