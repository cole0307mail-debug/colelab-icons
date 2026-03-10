// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DomeCameraOutlinedSvg from '@colelab/icons-svg/es/asn/DomeCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DomeCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DomeCameraOutlinedSvg }, slots);
  },
});
