import MuiModal from '@mui/material/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../../../atoms/modalAtom'
import { X } from 'phosphor-react';

export function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleClose = () => {
    setShowModal(false)
  }


  return (
    <MuiModal 
    open={showModal}
    onClose={handleClose}>
      <>
        <button onClick={handleClose} className="modalButton absolute right-5 top-5 !z-40 h-7 w-7 border-none bg-[#181818] hover:bg-[#181818]">
          <X size={16} />
        </button>
      </>
    </MuiModal>
  )
}