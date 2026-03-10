// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EditFilledSvg from '@colelab/icons-svg/es/asn/EditFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EditFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EditFilledSvg }, slots);
  },
});
