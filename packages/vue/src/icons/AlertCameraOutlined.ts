// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlertCameraOutlinedSvg from '@colelab/icons-svg/es/asn/AlertCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlertCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlertCameraOutlinedSvg }, slots);
  },
});
