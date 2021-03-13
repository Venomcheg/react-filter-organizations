import React, {useEffect,useCallback,useRef} from 'react';
import {connect} from 'react-redux'
import {addModal, addPhone, addAddress} from "../../redux/actions/modalActions";
import {addItem} from "../../redux/actions/itemsActions";
import './modals.scss'
import {Button, Input} from "antd";

function AddModal(props) {
  const modalRef = useRef()
  const closeModal = e => {
    if(modalRef.current === e.target) {
      props.addModal()
    }
  }
  const keyPress = useCallback(
    e => {

      if (e.key === 'Escape' && props.showModal) {
        props.addModal()
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
            <h3 className={"modal-form__title"}>Добавление филиала</h3>
            <button className={"close modal-form__close"} type={"button"} onClick={() => props.addModal()}></button>
          </div>
          <div className={"modal-form__content"}>
            <form onSubmit={(e) => props.addItem(e)}>
              <div className={"modal-form__item"}>
                <label className={"modal-form__label"} htmlFor="">Адрес</label>
                <Input className={"modal-form__input"} type="text" value={props.address} onChange={(e)=> props.addAddress(e)} required defaultValue="0571" />

              </div>
              <div className={"modal-form__item"}>
                <label className={"modal-form__label"} htmlFor="">Телефон</label>
                <Input className={"modal-form__input"} pattern="[789][0-9]{9}" type="phone" value={props.phone} onChange={(e)=> props.addPhone(e)} required/>
              </div>
              <div className={"modal-form__controls"}>
                <Button className={'btn'} type={"submit"}  htmlType={"submit"}>Сохранить</Button>
                <Button className={'btn btn--cancel'} type={"button"} onClick={() => props.addModal()}>Отмена</Button>
              </div>
            </form>
          </div>

      </div>

    </article>
  );
}

const mapStateToProps = (state) => ({
  showModal:state.modalsReducer.addModal,
  phone: state.itemsReducer.newItem.phone,
  address: state.itemsReducer.newItem.address,
})

export default connect(mapStateToProps, {addModal, addItem, addPhone,addAddress})(AddModal);