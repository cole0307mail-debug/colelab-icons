// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireCameraOutlinedSvg from '@colelab/icons-svg/es/asn/FireCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireCameraOutlinedSvg }, slots);
  },
});
