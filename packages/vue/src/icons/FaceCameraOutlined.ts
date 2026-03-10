// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FaceCameraOutlinedSvg from '@colelab/icons-svg/es/asn/FaceCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FaceCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FaceCameraOutlinedSvg }, slots);
  },
});
