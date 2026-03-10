// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CommunicationEquipmentOutlinedSvg from '@colelab/icons-svg/es/asn/CommunicationEquipmentOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CommunicationEquipmentOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CommunicationEquipmentOutlinedSvg }, slots);
  },
});
