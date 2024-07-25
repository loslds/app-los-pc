/*
 ***  hndpnl={'verificadodb'}
 ***  lista={helplista}
 ***  open={helpsinal}
 *** <GetHelpList hndpnl={'verificadodb'} lista={helplista} sinal={helpsinal}
 */
type TypeCardHelpGetResgate = {
  pnl?: string;
  lst?: string;
  open?: boolean;
};
export const CardHelpGetResgate = ({
  pnl,
  lst,
  open
}: TypeCardHelpGetResgate) => {
  return (
    <div>
    <h4>entrei no card</h4>;
    <p>pnl....: {pnl}</p>
    <p>lst....: {lst}</p>
    <p>open...: {open ? ('true') : ('false')}</p>
    </div>
  );
};
