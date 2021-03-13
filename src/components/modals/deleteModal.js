import React, {useRef,useCallback,useEffect} from 'react';
import {connect} from 'react-redux'
import {deleteItem} from '../../redux/actions/itemsActions'
import {deleteModalHide} from '../../redux/actions/modalActions'
import './deleteModal.scss'
import './modals.scss'
import {Button} from "antd";
function DeleteModal(props) {
  const modalRef = useRef()
  const closeModal = e => {
    if(modalRef.current === e.target) {
      props.deleteModalHide()
    }
  }
  const keyPress = useCallback(
    e => {

      if (e.key === 'Escape' && props.showModal) {
        props.deleteModalHide()
      }
    },
  );
  useEffect(
    ()=> {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    }
  )
  return (
    <article ref={modalRef} onClick={closeModal} className={"modal-form"}>
      <div className={"modal-form__wrap"}>
        <div className={"modal-form__header"}>
          <h3 className={"modal-form__title"}>Удаление филиала</h3>
          <button className={"close modal-form__close"} onClick={() => props.deleteModalHide()}></button>
        </div>
        <div className={"modal-form__content"}>
          <div className={"modal-form__content--text"}>
            <p className={"modal-form__approve-text"}>Вы действительно хотите удалить филиал:</p>
            <p className={"modal-form__address"}>{props.item.address}</p>
          </div>
          <div className={"modal-form__controls"}>
            <Button className={'btn btn--delete'} type={"submit"} onClick={() => props.deleteItem(props.item)}>Удалить</Button>
            <Button className={'btn btn--cancel'} type={"button"} onClick={() => props.deleteModalHide()}>Отмена</Button>
          </div>
        </div>
      </div>

    </article>
  );
}

const mapStateToProps = (state) => ({
  showModal:state.modalsReducer.deleteModal,
  item:state.modalsReducer.modalItem

})
export default connect(mapStateToProps,{deleteItem,deleteModalHide})(DeleteModal);