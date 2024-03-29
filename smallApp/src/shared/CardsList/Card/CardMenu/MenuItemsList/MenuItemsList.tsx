import React from 'react';
import ReactDOM from 'react-dom';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../../GenericList';
import { EIcons, Icon } from './Icon';
import styles from './menuitemslist.css';

const LIST = [
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.comments}/> <span>Комментарии</span> <div className={styles.divider}/> </> , className: 'list-item hide' },
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.share}/> <span>Поделиться</span> <div className={styles.divider}/></>, className: 'list-item hide'},
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.block}/><span>Скрыть</span><div className={styles.divider}/></>, className: 'list-item'},
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.save}/><span>Сохранить</span><div className={styles.divider}/></>, className: 'list-item hide'},
  { As: 'li' as const, text: <><Icon size={16} svg={EIcons.warning}/><span>Пожаловаться</span></>, className: 'list-item'},
  {As: 'li' as const, text: 'Закрыть', className: 'list-item last-item',}
].map(generateId)

interface IMenuItemsList{
  btnRect: Array<number>;
}

export function MenuItemsList( { btnRect }: IMenuItemsList) {

  const node = document.querySelector('#dd_root');
  if(!node) return null;

  return ReactDOM.createPortal(
    (
      <div style={{position: 'absolute',left: `${btnRect[1]-btnRect[3]-30}px`, top: `${btnRect[2] + btnRect[0]+20}px`}}>
      <GenericList list={LIST} className={styles.menuItemsList}  />
      </div>
    ), node
  ); 
}
